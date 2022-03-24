const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Incredible!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'That is great news!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'I can not wait!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'How Exciting',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'Wow!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Congratulations!',
        user_id: 1,
        post_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;