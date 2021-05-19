const app = require("../src/app");
const mongoose = require("mongoose");
const UserModel = require("../src/models/user.model");
const ActivityModel = require("../src/models/activity.model");
const ParticipantModel = require("../src/models/participant.model");

const userOneId = new mongoose.Types.ObjectId();
const userTwoId = new mongoose.Types.ObjectId();
const userThreeId = new mongoose.Types.ObjectId();

const users = [
	{
		_id: userOneId,
		name: "Sergey Aronov",
		email: "sergey@gmail.com",
		password: "12345678",
		age: 28,
	},
	{
		_id: userTwoId,
		name: "Shir Admon",
		email: "shir@gmail.com",
		password: "12345678",
		age: 24,
	},
	{
		_id: userThreeId,
		name: "Dima Krepak",
		email: "dima@gmail.com",
		password: "12345678",
		age: 23,
	},
];

const activities = [
	{
		title: "Running Group",
		description:
			"If you always run by yourself, you're missing out on the many benefits of group training. Running with a group not only helps to expand your social circle, but it also boosts motivation and can improve your athletic performance.",
		places: 4,
		participants: [users[0]],
		category: "Sport And Camping",
		subcategory: "Walking",
		date: "2021-05-22",
		address: {
			city: "Ashdod",
		},
		owner: userOneId,
		ownerName: users[0].name,
	},
	{
		title: "Drummer and singer needed for new covers band",
		description:
			"Hi, we are a bassist and two guitarists (in 30s and 40s) looking for a drummer and singer to join us and start a new covers band.",
		places: 1,
		participants: [users[0]],
		category: "Music",
		subcategory: "Drums",
		address: {
			city: "Ashdod",
		},
		completed: true,
		owner: userOneId,
		ownerName: users[0].name,
	},
	{
		title: "North Texas Outdoors",
		description:
			"This group is for those who love outdoor activities. Hiking, camping, backpacking, mountaineering, mountain biking, canoeing, kayaking, rock climbing, spelunking, walking, jogging, cycling, swimming, as well as other sports, are all activities that are possibilities for our calendar.",
		places: 2,
		participants: [users[1]],
		category: "Sport And Camping",
		subcategory: "Walking",
		date: "2021-05-25",
		address: {
			city: "Grapevine, USA",
		},
		completed: true,
		owner: userTwoId,
		ownerName: users[1].name,
	},
	{
		title: "Hong Kong Trail Runners",
		description:
			"Trailrunning is getting more popular than ever. The purpose of this group is to get as many trail runners possible who are interested to be together for trail running and doing community works. Anyone who is interested to run and contribute to this group is welcomed.",
		places: 6,
		participants: [users[1]],
		category: "Sport And Camping",
		subcategory: "Walking",
		date: "2021-05-26",
		address: {
			city: "Hong Kong, Hong Kong",
		},
		completed: true,
		owner: userTwoId,
		ownerName: users[1].name,
	},
	{
		title: "Bass Player",
		description: `MistyFive are a Jazz / Blues / Soul Band based in Hertfordshire looking for a confident bass player with strong rhythm and good skill level to join our line-up of vocals, guitar, sax and drums.
			We are looking for a seasoned bass player for recording and live performances in clubs, festivals etc. We have an eclectic set list of mainly off the beaten track cover songs.
			
			We're a very relaxed, close knit and friendly bunch so if your a bit of a diva we're probably not for you.
			
			We rehearse weekly on a Tuesday in Baldock or if recording in Codicote and look to play once or twice a month.`,
		places: 2,
		participants: [users[2]],
		category: "Music",
		subcategory: "Guitar",
		address: {
			city: "Ashdod",
		},
		completed: true,
		owner: userThreeId,
		ownerName: users[2].name,
	},
	{
		title: "Anyone looking for a female jazz singer?",
		description:
			"Hi, I was a lead singer in a 5 piece jazz band for 5 years and then I relocated to Dubai for 3 years. I really miss singing with the band and I would love to take it up again. We were quite a busy band working our normal working lives, rehearsing regularly and playing all sorts of gigs at the weekend. Blues, Jazz and Swing but I'll take a crack at most things! Contact me if your interested in getting together for a jam.",
		places: 2,
		participants: [users[2]],
		category: "Music",
		subcategory: "Singer",
		address: {
			city: "Tel Aviv",
		},
		owner: userThreeId,
		ownerName: users[2].name,
	},

	{
		title: "Dear Monday seeking bassist",
		description:
			"Established indie/alt band Dear Monday are looking for a bassist to join us.",
		places: 2,
		participants: [users[1]],
		category: "Music",
		subcategory: "Guitar",
		address: {
			city: "Rehovot",
		},
		completed: true,
		owner: userTwoId,
		ownerName: users[1].name,
	},

	{
		title: "Singer/recording artist",
		description:
			"Hi, we are a bassist and two guitarists (in 30s and 40s) looking for a drummer and singer to join us and start a new covers band.",
		places: 2,
		participants: [users[0]],
		category: "Music",
		subcategory: "Guitar",
		address: {
			city: "Rehovot",
		},
		completed: true,
		owner: userOneId,
		ownerName: users[0].name,
	},
	{
		title: "Old bass player looking to make music",
		description:
			"I play bass and I'd love to meet other musicians to make music together. I've been playing a while and I'm reasonably competent but I'm not a Jaco Pastorius. I can read music or work from chords/tab and commit to memory (eventually)! As I'm retired I can meet (once we're allowed) during the day.",
		places: 1,
		participants: [users[0]],
		category: "Music",
		subcategory: "Guitar",
		address: {
			city: "Ashdod",
		},
		completed: true,
		owner: userOneId,
		ownerName: users[0].name,
	},

	{
		title: "Guitarist wanted",
		description: `Established Indie/Britpop band seeking new lead guitarist aged between 18-30.

			Our influences include The Beatles, Supergrass, Suede, Roxy Music, The Smiths, David Bowie, 10cc and many more.
			
			We’re looking for a guitarist with a good sense of melody, Rhythm and use of effects pedal, we’re not after a bit of overdrive and heavy rhythm. Backing vocals are a plus.
			
			Must be committed and have transport.
			
			Message for more details.`,
		places: 2,
		participants: [users[1]],
		category: "Music",
		subcategory: "Guitar",
		address: {
			city: "Northampton",
		},
		completed: true,
		owner: userTwoId,
		ownerName: users[1].name,
	},
	{
		title: "Bass player",
		description: `Creative and competent bass player seeks band. I have played most styles but I am very influenced by Jazz Funk & pop music.
			Own teeth, transport, backline etc.
			Wanting to write, arrange, rehearse & gig after a covid hiatus, but covers are not a problem.
			Looking for committed comprades to make people dance.
			
			Cheers`,
		places: 2,
		participants: [users[1]],
		category: "Music",
		subcategory: "Guitar",
		address: {
			city: "Herts",
		},
		completed: true,
		owner: userTwoId,
		ownerName: users[1].name,
	},

	{
		title: "Atlanta Running Meetup",
		description: "OFFICIAL REOPENING DATE: MAY 22ND 2021",
		places: 10,
		participants: [users[0]],
		category: "Sport And Camping",
		subcategory: "Walking",
		date: "2021-05-22",
		address: {
			city: "Atlanta",
		},
		completed: true,
		owner: userOneId,
		ownerName: users[0].name,
	},

	{
		title: "Catan Tournament",
		description:
			"Kerem House welcomes you to the first Settlers Tournament to end the summer in style!",
		places: 10,
		participants: [users[0]],
		category: "Games And Other Activities",
		subcategory: "Board Games",
		date: "2021-05-22",
		address: {
			city: "Tel Aviv",
		},
		completed: true,
		owner: userOneId,
		ownerName: users[0].name,
	},
];

const start = async () => {
	await UserModel.deleteMany();
	await ActivityModel.deleteMany();
	await ParticipantModel.deleteMany();

	users.forEach(async (user) => {
		await new UserModel(user).save();
	});

	activities.forEach(async (activity) => {
		const Activity = await new ActivityModel(activity).save();
		const participant = new ParticipantModel({
			user: Activity.owner,
			activity: Activity._id,
		});
		await participant.save();
	});
};

start().then(() => {
	console.log("Mongo DB has reset successfully");
});
