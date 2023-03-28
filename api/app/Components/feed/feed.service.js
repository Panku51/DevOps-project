const db = require('../../database/db-connection');
const { sortPostsByDate } = require('../../utils/post-sorting');
const logger = require('../../helpers/logger').logger.child({module: 'FeedService'});

const Posts = require('../posts/post.model');