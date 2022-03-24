const { Post } = require('../models');

const postdata = [
    {
        title: 'NoteTaker gets finished',
        post_content: 'After a short delay the notetaker app has gone live and is functional.',
        user_id: 1
    },
    {
        title: 'Project 2 in the works.',
        post_content: 'Project 2 for the University of Utah coding bootcamp is in progress and is on track to be finished by next week.',
        user_id: 1
    },
    {
        title: 'Students near the end of coding bootcamp',
        post_content: 'In just two months the students of the University of Utah Coding Bootcamp will finish the course and earn their certificates.',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;