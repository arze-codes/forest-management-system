import { pgTable, serial, integer } from 'drizzle-orm/pg-core';

export const user = pgTable('nursery_users', {
	id: serial('id').primaryKey(),
	age: integer('age')
});
