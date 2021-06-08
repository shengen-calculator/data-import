CREATE FUNCTION GetEurRate(
)
    RETURNS DECIMAL(9, 2)
AS
BEGIN
    DECLARE @result DECIMAL(9, 2)
    SELECT TOP 1 @result = Евро
    FROM [FenixParts].dbo.[Курс валют]
    ORDER BY ID_Курса DESC

    RETURN @result

END
go

