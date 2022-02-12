// import each Model
const User = require('./User');
const Conversation = require('./Conversation');
const Message = require('./Message');
const Participant = require('./Participant');

// setup User associations
// user has many conversations
User.hasMany(Conversation, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
// user has many messages
User.hasMany(Message, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Participant, {
  foreignKey: 'user_id',
});

// setup Conversation associations
// conversation has many users
// Conversation.hasMany(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });
// conversation has many messages
Conversation.hasMany(Message, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Conversation.hasMany(Participant, {
  foreignKey: 'conversation_id',
});

// Participants associations
Participant.belongsTo(Conversation, {
  foreignKey: 'conversation_id',
});
Participant.belongsTo(User, {
  foreignKey: 'user_id',
});

// setup message associations
// message belongs to one conversation
Message.belongsTo(Conversation, {
  foreignKey: 'conversation_id',
});
// message belongs to one user
Message.belongsTo(User, {
  foreignKey: 'user_id',
});
// modularize this file by exporting an object containing each Model
module.exports = { User, Conversation, Message, Participant };
