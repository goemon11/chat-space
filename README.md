# Chat-space DB設計
## users table
|Column|Type|Options|
|------|----|-------|
|name|sting|null: false|
|password|string|null: false|
|email|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users, through: :groups_users
- has_many :groups_users

## groups_users table
|Colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false, foreign_key|
|group_id|integer|null: false, foreign_key|

### Association
- belongs_to: user
- belongs_to: group


## messages table
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|group_id|integer|null: false, foreign_key|
|user_id|integer|null: false, foreign_key|

### Association
- belongs_to :user
- belongs_to : group