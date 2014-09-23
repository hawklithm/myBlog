sequelize=require('./config/sequelize-config').sequelize;
Sequelize=require('./config/sequelize-config').Sequelize;
var articleDetailDefine = sequelize.define('article_detail', {
    article_code: Sequelize.STRING,
    article_file_url: Sequelize.STRING,
    type: Sequelize.INTEGER,
    status:Sequelize.INTEGER,
    title: Sequelize.STRING,
    brief_view: Sequelize.STRING,
    option: Sequelize.INTEGER,
    gmt_create: Sequelize.DATE,
    gmt_modified: Sequelize.DATE
}, {
    tableName: 'article_detail', // this will define the table's name
    underscored: true,
    freezeTableName: true,
    timestamps: true,           // this will deactivate the timestamp columns
    updatedAt: 'gmt_modified',
    createdAt:'gmt_create'
});
var attributes=[
    ['article_code','articleCode']
    ,['article_file_url','articleFileUrl']
    ,'type'
    ,'status'
    ,'title'
    ,['brief_view','briefView']
    ,'option'
    ,['gmt_create','gmtCreate']
    ,['gmt_modified','gmtModified']
    ,['user_id','userId']
];
exports.articleDetailDefine={define:articleDetailDefine,attr:attributes};