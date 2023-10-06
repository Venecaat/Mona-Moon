namespace Backend.Utils
{
    public static class EnvVarHelper
    {
        public static string JwtTokenKey { get => Get("JWT_TOKEN_KEY"); }
        public static string FrontendUrl { get => Get("FRONTEND_URL"); }

        private static string Get(string envKey)
        {
            string? envVar = Environment.GetEnvironmentVariable(envKey);

            return envVar ?? throw new NullReferenceException($"Missing \"{envKey}\" environment variable!");
        }
    }
}
