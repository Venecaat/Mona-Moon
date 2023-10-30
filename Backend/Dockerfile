FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Backend.csproj", "Backend/"]
RUN dotnet restore "Backend/Backend.csproj"
WORKDIR "/src/Backend"
COPY . .
RUN dotnet build "Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Backend.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
RUN apt-get update && apt-get install -y curl
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Backend.dll"]