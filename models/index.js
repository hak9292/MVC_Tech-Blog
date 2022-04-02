/*
What models do I need.... :

One for the user w/ inputs of:
[THEN I am prompted to enter my username and password]
id
username
password

One for the posts w/ properties of:
[THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created]
id
Post Title
date created
post contents

One for the comments that user can leave
[WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment]

Post Title
contents
username
date created
option to leave comment: boolean?..




building keys btwn tables:
So posts cannot exist without user, so 
post.belongsto(user, {
    add foreginkey
    onDelete: cascade
})

same goes for comments, so
comment.belongsto(user, {
    add foreginkey
    onDelete: cascade
})

comments cannot exist without the post
but the post will have many comments
Post.hasMany(comment, {
    foreignkey
    on Del: cascade
})
*/


const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: "postId",
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: "userId",
    onDelete: 'CASCADE'
});



module.exports = { User, Comment, Post };