namespace Backend.Utils
{
    public static class EnvVarHelper
    {
        public static string DbConnectionString { get => GetDbConnectionString(); }
        public static string JwtTokenKey { get => Get("JWT_TOKEN_KEY"); }
        public static string FrontendUrl { get => Get("FRONTEND_URL"); }

        private static string GetDbConnectionString()
        {
            string envKeyDbServer = "DB_SERVER";
            string? dbServer = Environment.GetEnvironmentVariable(envKeyDbServer);
            CheckEnvironmentVariableExistence(envKeyDbServer, dbServer);

            string envKeyDbDatabase = "DB_DATABASE";
            string? dbDatabase = Environment.GetEnvironmentVariable(envKeyDbDatabase);
            CheckEnvironmentVariableExistence(envKeyDbDatabase, dbDatabase);

            string envKeyIntegratedSecurity = "INTEGRATED_SECURITY";
            string? integratedSecurity = Environment.GetEnvironmentVariable(envKeyIntegratedSecurity);
            if (integratedSecurity is not null && integratedSecurity.ToUpper() == "SSPI")
                return $"Server={dbServer};Database={dbDatabase};MultipleActiveResultSets=true;TrustServerCertificate=True";

            string envKeyDbId = "DB_ID";
            string? dbId = Environment.GetEnvironmentVariable(envKeyDbId);
            CheckEnvironmentVariableExistence(envKeyDbId, dbId);

            string envKeyDbPassword = "DB_PASSWORD";
            string? dbPassword = Environment.GetEnvironmentVariable(envKeyDbPassword);
            CheckEnvironmentVariableExistence(envKeyDbPassword, dbPassword);

            return $"Server={dbServer};Database={dbDatabase};User Id={dbId};Password={dbPassword};TrustServerCertificate=True;";
        }

        private static string Get(string envKey)
        {
            string? envVar = Environment.GetEnvironmentVariable(envKey);
            CheckEnvironmentVariableExistence(envKey, envVar);

            return envVar!;
        }

        private static void CheckEnvironmentVariableExistence(string envKey, string? envVar)
        {
            if (string.IsNullOrEmpty(envVar)) throw new NullReferenceException($"Missing \"{envKey}\" environment variable!");
        }
    }
}
