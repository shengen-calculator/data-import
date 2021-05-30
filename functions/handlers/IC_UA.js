const getQuery = () => {
    return `
    BEGIN TRANSACTION
    CREATE TABLE [dbo].[5670706842959872_tmp](
                             [tow_kod] [varchar](50) NULL,
                             [index] [varchar](50) NULL,
                             [tecdoc_index] [varchar](50) NULL,
                             [naz] [varchar](50) NULL,
                             [producer] [varchar](50) NULL,
                             [price] [varchar](50) NULL,
                             [spec_price] [varchar](50) NULL,
                             [uj0] [varchar](50) NULL,
                             [uj2] [varchar](50) NULL,
                             [uj3] [varchar](50) NULL,
                             [uj4] [varchar](50) NULL,
                             [uj6] [varchar](50) NULL,
                             [uj5] [varchar](50) NULL,
                             [ur1] [varchar](50) NULL,
                             [ur2] [varchar](50) NULL,
                             [uw1] [varchar](50) NULL,
                             [ue1] [varchar](50) NULL,
                             [ud1] [varchar](50) NULL,
                             [ud2] [varchar](50) NULL,
                             [uf1] [varchar](50) NULL,
                             [uh1] [varchar](50) NULL,
                             [uq1] [varchar](50) NULL,
                             [uk1] [varchar](50) NULL,
                             [up1] [varchar](50) NULL,
                             [ux1] [varchar](50) NULL,
                             [uy1] [varchar](50) NULL,
                             [ub1] [varchar](50) NULL,
                             [uj8] [varchar](50) NULL,
                             [uj9] [varchar](50) NULL,
                             [ue2] [varchar](50) NULL,
                             [um1] [varchar](50) NULL,
                             [ur3] [varchar](50) NULL,
                             [ud3] [varchar](50) NULL,
                             [ue3] [varchar](50) NULL,
                             [ug1] [varchar](50) NULL,
                             [uj7] [varchar](50) NULL,
                             [uc1] [varchar](50) NULL,
                             [uo1] [varchar](50) NULL,
                             [us1] [varchar](50) NULL,
                             [up2] [varchar](50) NULL,
                             [un1] [varchar](50) NULL,
                             [ut1] [varchar](50) NULL,
                             [ug2] [varchar](50) NULL,
                             [ux2] [varchar](50) NULL,
                             [pl_qty] [varchar](50) NULL,
                             [ud4] [varchar](50) NULL,
                             [ui1] [varchar](50) NULL,
                             [um2] [varchar](50) NULL,
                             [uy2] [varchar](50) NULL,
                             [uu1] [varchar](50) NULL,
                             [uu2] [varchar](50) NULL
) ON [PRIMARY]

BULK INSERT [5670706842959872_tmp]
    FROM 'C:\\Program Files\\Data Import\\Temp\\5670706842959872.csv'
    WITH ( FIELDTERMINATOR = '";"', ROWTERMINATOR = '0x0a', CODEPAGE = '1251', FIRSTROW = 2)
COMMIT    
SELECT COUNT(1) AS QTY FROM [5670706842959872_tmp]
`;
};
module.exports.getQuery = getQuery;
