FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
<<<<<<< HEAD

COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet AceBook_CS_NotSoSharp.dll
=======
COPY . .

CMD ASPNETCORE_URLS=http://*:$PORT dotnet AceBook_CS_NotSoSharp.dll


>>>>>>> 66c838baf553e3a141ce743ed62ee390f2ee9df8
