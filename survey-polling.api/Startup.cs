using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using survey_polling.api.Data;
using survey_polling.api.Hubs;
using System.Security.Claims;

namespace survey_polling.api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<PollContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("LocalConnection")));

            // Standard authentication code for Auth0
            //string domain = $"https://{Configuration["Auth0:Domain"]}/";
            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //}).AddJwtBearer(options =>
            //{
            //    options.Authority = domain;
            //    options.Audience = Configuration["Auth0:ApiIdentifier"];
            //    options.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        NameClaimType = ClaimTypes.NameIdentifier
            //    };
            //});

            services.AddControllers();

            services.AddCors(options => options.AddPolicy("AllowSpecificOrigin", builder =>
            {
                builder.AllowAnyMethod().AllowAnyHeader()
                       .WithOrigins("http://localhost:5000")
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials();
            }));

            // Enable support for websockets
            services.AddSignalR();

            // React production files
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "../survey-polling.client/build";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseAuthentication();
            app.UseWebSockets();
            app.UseCors("AllowSpecificOrigin");
            app.UseSpaStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<PollHub>("/poll");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "../survey-polling.client";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
