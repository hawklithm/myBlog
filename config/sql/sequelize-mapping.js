sequelize=require('./sequelize-config').sequelize;
Sequelize=require('./sequelize-config').Sequelize;
exports.articleDetailDefine={
    define:sequelize.define('article_detail', {
    id: Sequelize.INTEGER,
    article_code: Sequelize.STRING,
    article_file_url: Sequelize.STRING,
    type: Sequelize.INTEGER,
    status:Sequelize.INTEGER,
    title: Sequelize.STRING,
    brief_view: Sequelize.STRING,
    option: Sequelize.INTEGER,
    gmt_create: Sequelize.DATE,
    gmt_modified: Sequelize.DATE,
    user_id: Sequelize.INTEGER
}, {
    tableName: 'article_detail', // this will define the table's name
    underscored: true,
    freezeTableName: true,
    timestamps: true,           // this will deactivate the timestamp columns
    updatedAt: 'gmt_modified',
    createdAt:'gmt_create'
}),
    attr:[
    ['id','articleId']
    ,['article_code','articleCode']
    ,['article_file_url','articleFileUrl']
    ,'type'
    ,'status'
    ,'title'
    ,['brief_view','briefView']
    ,'option'
    ,['gmt_create','gmtCreate']
    ,['gmt_modified','gmtModified']
    ,['user_id','userId']
]};
exports.userDefine={
    define:sequelize.define('user_info',{
        user_id: Sequelize.INTEGER,
        nick_name: Sequelize.STRING,
        option: Sequelize.INTEGER,
        feature: Sequelize.STRING,
        gmt_create: Sequelize.DATE,
        gmt_modified: Sequelize.DATE
    },{
        tableName: 'user_info',
        underscored: true,
        freezeTableName: true,
        timestamps:true,
        updatedAt: 'gmt_modified',
        createdAt: 'gmt_create'
    }),
    attr:[
        ['user_id','userId']
        ,['nick_name','nickname']
        ,'option'
        ,'feature'
    ]
};