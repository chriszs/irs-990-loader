module.exports = function(sequelize, DataTypes) {
    var Grant = sequelize.define('irs990_grant', {
        object_id: DataTypes.TEXT,
        tax_period: DataTypes.TEXT,
        filer_ein: DataTypes.TEXT,
        recipient_name: DataTypes.TEXT,
        recipient_street_1: DataTypes.TEXT,
        recipient_street_2: DataTypes.TEXT,
        recipient_city: DataTypes.TEXT,
        recipient_state: DataTypes.TEXT,
        recipient_zip: DataTypes.TEXT,
        recipient_country: DataTypes.TEXT,
        recipient_ein: DataTypes.TEXT,
        recipient_tax_section: DataTypes.TEXT,
        recipient_relationship: DataTypes.TEXT,
        cash_amt: DataTypes.DECIMAL(12,2),
        non_cash_amt: DataTypes.DECIMAL(12,2),
        non_cash_desc: DataTypes.TEXT,
        valuation_method: DataTypes.TEXT,
        purpose: DataTypes.TEXT
    },{
        indexes: [{
            fields: ['filer_ein']
        },{
            fields: ['recipient_ein']
        },{
            fields: ['object_id']
        }]
    });

    return Grant;
};
