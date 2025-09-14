const zod = require('zod');

const voterValidation = zod.object({
 name:zod.string(),
 age:zod.number(),
 adhaarCard: zod.string().length(12),
 phoneNumber: zod.string().length(10)
});

module.exports = voterValidation;

