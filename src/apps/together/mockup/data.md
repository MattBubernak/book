---
layout: layout.hbs
---

# Revision
In order to fit a smaller screen size, there had to be some significant revisions of the client page. I switched to three important columns: Live Stream, Updates, and Comments. Only the most latest info is readily displayed to the screen, which means that we only see the latest comment and latest update. However, they can be cycled via buttons. In order to meet the real-time requirements, I've added more detailed "chips" with user info. Within the column of the live stream, we see all of the users that are viewing the stream. Only experts can comment, so in the comments page is now also a list of the experts who are assisting/commenting. 

# Data Models

## Projects Database

Project:
{
	id: double,
	ownerID: double,
	category: string,
	streamURL: string,
	comments: array[comment],
	updates: array[update]
}

## Comments Database

Comment:
{
	id: double,
	inProgress: bool,
	ownerID: double,
	isReply: bool,
	replyToID: double
}

## Updates Database

Update:
{
	id: double,
	ownerID: double,
	isReply: bool,
	replyToID: double
}

## Users Database

Users
{
	id: double,
	userImg: string,
	userName: string,
	firstName: string,
	lastName: string,
	expert: bool,
	expertField: string,
	viewingID: double,
	viewingStatus: string,
	online: bool
}
