import {returnQuantity} from "./common/returnQuantity";
import {dropTemporaryTable} from "./common/dropTemporaryTable";

const getQuery = () => {
    return `
        ${createTemporaryTable()}
        ${importData()}
        ${insertNewPositionsToCatalog('5')}
        ${insertPositionsToPrice('1.25', '1.15', '1.12', '7', 'ug1', '5')}    
        ${insertPositionsToPrice('1.25', '1.15', '1.12', '9', 'ug2', '5')}    
        ${insertPositionsToPrice('1.25', '1.15', '1.12', '11', 'um1', '5')}    
        ${insertPositionsToPrice('1.25', '1.15', '1.12', '12', 'um2', '5')}    
        ${insertPositionsToPrice('1.25', '1.15', '1.12', '14', 'uj0', '5')}    
        ${insertPositionsToPrice('1.25', '1.15', '1.12', '84', 'ur1', '5')}    
        ${returnQuantity('[5670706842959872_tmp]')}
        ${dropTemporaryTable('[5670706842959872_tmp]')}`;
};

const createTemporaryTable = () => {
    return `
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
        ) ON [PRIMARY]`;
};

const importData = () => {
    return `
        BULK INSERT [5670706842959872_tmp]
        FROM 'C:\\Program Files\\Data Import\\Temp\\5670706842959872.csv'
        WITH ( FIELDTERMINATOR = '";"', ROWTERMINATOR = '0x0a', CODEPAGE = '1251', FIRSTROW = 2)
        
        UPDATE [5670706842959872_tmp]
        SET [tow_kod] = RIGHT([tow_kod], LEN([tow_kod]) - 1)`;
};

const insertNewPositionsToCatalog = (vendorId) => {
    return `
        INSERT INTO BAZA_TEMP (SUPP_BRAND,
                               SUPP_NUMBER,
                               SUPP_NAME,
                               SUPP_DESCRIPTION,
                               SUPP_ID,
                               PRODUCER_BRAND,
                               PRODUCER_NUMBER,
                               PRODUCER_NAME,
                               SUPP_PART_ID)
        
        SELECT [5670706842959872_tmp].producer,
               [5670706842959872_tmp].[index],
               dbo.GetShortNumber([5670706842959872_tmp].[index]),
               [5670706842959872_tmp].naz,
               ${vendorId},
               [5670706842959872_tmp].producer,
               [5670706842959872_tmp].[index],
               dbo.GetShortNumber([5670706842959872_tmp].[index]),
               [5670706842959872_tmp].tow_kod
        FROM [5670706842959872_tmp]
                 LEFT OUTER JOIN
             BAZA ON [5670706842959872_tmp].tow_kod = BAZA.SUPP_PART_ID
        WHERE (BAZA.ID IS NULL)
          AND ([5670706842959872_tmp].producer IS NOT NULL)`;
};

const insertPositionsToPrice = (margin, marginPlus, marginSPlus, warehouseId, warehouseName, vendorId) => {
    return `
        INSERT INTO Prices_temp(Брэнд,
                                [Номер запчасти],
                                Name,
                                Описание,
                                [Срок доставки],
                                Цена4,
                                Цена5,
                                Цена6,
                                Цена7,
                                Цена13,
                                Цена14,
                                Цена,
                                Наличие,
                                Дата,
                                [Номер поставщика],
                                WarehouseId,
                                Quality,
                                ID_Поставщика)
        SELECT BAZA.PRODUCER_BRAND,
               BAZA.PRODUCER_NUMBER,
               BAZA.PRODUCER_NAME,
               RIGHT(BAZA.SUPP_DESCRIPTION, 80),
               0,
               REPLACE([5670706842959872_tmp].spec_price, ',', '.')/dbo.GetEurRate()*${marginSPlus},
               REPLACE([5670706842959872_tmp].spec_price, ',', '.')/dbo.GetEurRate()*${margin}/0.65*0.75,
               REPLACE([5670706842959872_tmp].spec_price, ',', '.')/dbo.GetEurRate()*${margin}/0.65*0.7,
               REPLACE([5670706842959872_tmp].spec_price, ',', '.')/dbo.GetEurRate()*${margin},
               REPLACE([5670706842959872_tmp].spec_price, ',', '.')/dbo.GetEurRate(),
               REPLACE([5670706842959872_tmp].spec_price, ',', '.')/dbo.GetEurRate()*${marginPlus},
               REPLACE([5670706842959872_tmp].spec_price, ',', '.')/dbo.GetEurRate()*${margin}/0.65,
               [5670706842959872_tmp].ug1,
               GETDATE(),
               RIGHT(dbo.BAZA.SUPP_NUMBER, 25),
               ${warehouseId},
               dbo.GetQualityByBrand(BAZA.PRODUCER_BRAND),
               ${vendorId}        
        FROM [5670706842959872_tmp]
                 INNER JOIN
             BAZA ON [5670706842959872_tmp].tow_kod = BAZA.SUPP_PART_ID
        WHERE ([5670706842959872_tmp].${warehouseName} > '0')`;
};

module.exports.getQuery = getQuery;
