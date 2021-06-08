CREATE FUNCTION [dbo].[GetQualityByBrand](@brand VARCHAR(50))
    RETURNS INT
AS
BEGIN
    DECLARE @result INT
    SELECT @result = [FenixParts].dbo.Brands_Quality_.quality_num
    FROM [FenixParts].dbo.Brands_Quality
             INNER JOIN
         [FenixParts].dbo.Брэнды ON [FenixParts].dbo.Brands_Quality.ID_Брэнда = [FenixParts].dbo.Брэнды.ID_Брэнда
             INNER JOIN
         [FenixParts].dbo.Brands_Quality_
         ON [FenixParts].dbo.Brands_Quality.Brand_Quality = [FenixParts].dbo.Brands_Quality_.quality_lett
    WHERE ([FenixParts].dbo.Брэнды.Брэнд LIKE @brand)

    RETURN ISNULL(@result, 4)
END
go

