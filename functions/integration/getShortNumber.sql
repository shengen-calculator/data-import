CREATE FUNCTION [dbo].[GetShortNumber](@number VARCHAR(25))
    RETURNS VARCHAR(25)
AS
BEGIN
    DECLARE @symbols VARCHAR(50)

    SET @symbols = '+|-|=|/|\|.|,|*|:|;|!| |(|)|_'

    DECLARE @symb CHAR(1)
    DECLARE symb_cursor CURSOR FOR SELECT value FROM STRING_SPLIT(@symbols, '|')
    OPEN symb_cursor
    FETCH NEXT FROM symb_cursor INTO @symb

    WHILE @@FETCH_STATUS = 0
        BEGIN
            SET @number = REPLACE(@number, @symb, '')
            FETCH NEXT FROM symb_cursor INTO @symb;
        END
        CLOSE symb_cursor;
        DEALLOCATE symb_cursor;

        RETURN @number
END
go
