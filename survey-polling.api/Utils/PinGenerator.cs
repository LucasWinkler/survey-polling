using System;

namespace survey_polling.api.Utils
{
    public static class PinGenerator
    {
        private static readonly Random random = new Random();
        private static readonly object syncLock = new object();

        private const int minValue = 100000;
        private const int maxValue = 999999;

        public static int RandomPin()
        {
            lock (syncLock)
            {
                return random.Next(minValue, maxValue);
            }
        }
    }
}
