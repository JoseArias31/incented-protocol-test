# Application Architecture Design - Incented Protocol

## Purpose

-Incented Protocol is a web application to empower communities and (DAOs) by providing a user-friendly and transparent platform coordinating and incentivizing the completion of tasks.  Community members have the ability to contribute to a task while being rewarded for their efforts.  

-The user-base consists of community users, community administrators, and super administrators.  Users will be able to propose, prioritize, contribute, review a proposed task while community administrators will manage their community and associated funds used for incentivizing tasks.  On the other hand, super administrators will manage all communities, members, and distribution of funds to each community.  

-The purpose of the Incented Protocol Web2 App is to empower communities and (DAOs) by providing a user-friendly and transparent platform for task coordination, incentivization, and efficient management, enabling community members(Rabbits) to “contribute ” while being rewarded (Carrots) fairly for their efforts. 



## Key Terms

| Term  | Description |
| ------------- | ------------- |
| Rabbits🐰 | Stores user information  |
| Rabbit-Hole🐰🕳️ | A specific community in the Incented protocol |
| Dams and Sires | Administrators of the Rabbit-Hole |
| Carrots🥕 | The protocols form of reward that is also used to interact on the protocol (e.g.stake on proposals, etc.).  For this version, these are simply “points” of that are tracked in a database |
| Wallet | A digital representation of the users funds (store for carrots) |
| Staking  | A core interaction performed with Carrots |
| Protocol Fee | A fee that is deducted from the users Wallet when they interact with the protocol in the form of carrots. The protocol fee goes to the Rabbit-Holes Wallet (the Community Wallet) |


## User Stories

### ***Users***

*EPIC:*  A user (Rabbit) wants to contribute to a community and be compensated (Rabbit Hole).

- As a user I want to define the title, description, time estimation, validation period and expiration date for a contribution so that the proposed task is completed.
- As a user I want to be able to view all the tasks that are available in my community so that I can contribute and be rewarded.
- As a user, I want to be able to propose tasks, so I can suggest projects that align with our app’s goal.
- As a user, I want to submit a task so that I along with others can work on it.
- As a user, I want to claim a task so that I can contribute to it .
- As a user, I want to submit a contribution so that I can provide a solution to a proposed task
- As a user, I want to review a contribution so that I can provide a stake for or against the contribution. 
- As a user, I want to be rewarded for a task proposal, ensuring that contributors are fairly compensated for their contributions.
- As a user I want to be able to see my wallet balance so that I can make contributions to my community.

### ***Community Administrator (Dams & Sires)***

*EPIC:* A community administrator wants to manage a community and ensure there is no mal intent.

- As an admin, I want to manage communities so that I can provision and configure the protocol, adjust requirements (timeframes/rewards), set/adjust prioritizer reward.
- As an admin, I want to maintain the platform, ensuring that the App remains secure and accessible to the community.
- As an admin, I want to have veto power over my community for tasks with malicious intent. 
- As an admin, I want to request a specific amount of carrots from the incented team so that I can sufficiently fund the rewards for a proposal in the community.  

### ***Super Administrator (Incented Team)***

*EPIC:* A super admin wants to manage individual communities (Rabbit Holes) and distribute funds to them (carrot pot).

- As a super admin, I want to manage individual communities & members so that I can control who has access and assign community admins.
- As a super admin, I want to be able to view a list of all task proposals and their statuses, allowing others to see projects or contributions.
- As a super admin, I want to distribute carrots to community admins so that I can enable those admins to sufficiently fund their proposals. 
- As a super admin, I want to review and respond to user feedback, and inquiries to maintain a positive user experience

***Database Design***

**Mission Statement**

The purpose of the Incented Protocol database is to gather and maintain information from users & communities, making it available to support the completion of tasks along with earning rewards.

**Mission Objective**

Provide ability to store user account information
Store login credentials to compare with sign-in information provided by users for authentication
Allow users to submit, update, delete a proposal
Enable users to make contributions to a proposal
Enable users to validate a proposal
Allow users to define the expiration, timeline, reward, and validation period for a proposal

**Entities** 

**-Auth (Supabase provided)**
 Attributes: User UID, Email, Phone, Provider, Created, Last Sign-In

**-Users**
Attributes: User ID, username, firstname, lastname, email, Created_at, Wallet ID

**-Task/Proposal**
 Attributes: Task ID, Title, Created_at, Update_at, Description, Expiration, Validation Period, Timeline, Reward

**-Contribution**
Attributes: Contribution ID, Title, Description, Created_at, Task ID (Foreign Key)

**-Validation**
Attributes: Validate ID, Review, Rating, Stake, Created-at, Contribution ID (Foreign Key)

**-Wallet**
Attributes: Wallet ID, User ID (Foreign Key), total

**-Carrot-Pot (community wallet)**
Attributes: Carrot-Pot ID, Rabbit-Hole ID (Foreign Key), total
**-Rabbit-Hole**
Attributes: Rabbit-Hole ID, Title, Created_at, Description, Carrot-Pot ID (Foreign Key)

**Relationship**

-A user may submit one or more tasks/proposals; A task/proposal can only have one user (owner)

-A task can have one or more contributions; A contribution can only have one task

-A contribution can have one or more validations; A validation can only have one contribution.

-A user may have one or more contributions and a contribution can be associated with only one user. 

-A user may have one or more validations; A validation can only have one user

-A Rabbit-Hole can have one or many users; A user can have one or many Rabbit-Holes

-A user must have only one wallet; A wallet can only have one user

-A Rabbit-Hole must have one Carrot-Pot; A Carrot-Pot can only have one Rabbit-Hole

# Tables:

## Auth:
- **User UID (Primary Key)**
- Email
- Phone
- Provider
- Created
- Last Sign-In

## Users:
- **User ID (Primary Key)**
- Username
- Firstname
- Lastname
- Email
- Created_at
- Wallet ID (Foreign Key to Wallet table)

## Task/Proposal:
- **Task ID (Primary Key)**
- Title
- Created_at
- Update_at
- Description
- Expiration
- Validation Period
- Timeline
- Reward
- User ID (Foreign Key to Users table)

## Contribution:
- **Contribution ID (Primary Key)**
- Title
- Description
- Created_at
- Task ID (Foreign Key to Task/Proposal table)

## Validation:
- **Validate ID (Primary Key)**
- Review
- Rating
- Stake
- Created_at
- Contribution ID (Foreign Key to Contribution table)

## Wallet:
- **Wallet ID (Primary Key)**
- User ID (Foreign Key to Users table)
- Total

## Carrot-Pot (Community Wallet):
- **Carrot-Pot ID (Primary Key)**
- Rabbit-Hole ID (Foreign Key to Rabbit-Hole table)
- Total

## Rabbit-Hole:
- **Rabbit-Hole ID (Primary Key)**
- Title
- Created_at
- Description
- Carrot-Pot ID (Foreign Key to Carrot-Pot table)


**Diagram**

### Database Schema

| Table            | Fields                                                  |
|------------------|---------------------------------------------------------|
| Auth             | User_UID (PK), Email, Phone, Provider, Created, Last Sign-In |
| Users            | User_ID (PK), Username, Firstname, Lastname, Email, Created_at, Wallet_ID (FK) |
| Task/Proposal    | Task_ID (PK), Title, Created_at, Update_at, Description, Expiration, Validation Period, Timeline, Reward, User_ID (FK) |
| Contribution     | Contribution_ID (PK), Title, Description, Created_at, Task_ID (FK) |
| Validation       | Validate_ID (PK), Review, Rating, Stake, Created_at, Contribution_ID (FK) |
| Wallet           | Wallet_ID (PK), User_ID (FK), Total                       |
| Carrot-Pot       | Carrot-Pot_ID (PK), Rabbit-Hole_ID (FK), Total            |
| Rabbit-Hole      | Rabbit-Hole_ID (PK), Title, Created_at, Description, Carrot-Pot_ID (FK) |

**Empower Communities:**
Enable communities and DAOs to harness the collective power of their members through a seamless and empowering platform.

**Transparent Task Coordination:**
Facilitate transparent and efficient coordination of tasks within communities, allowing users to propose, prioritize, and contribute to initiatives.
