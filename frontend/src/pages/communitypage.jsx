import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	MessageSquare, Heart, Share2, Calendar, Users,
	TrendingUp, MoreHorizontal, Image as ImageIcon,
	Send, Video, Award, Search, Bell, Home, Star
} from 'lucide-react';

// --- Mock Data ---

const POSTS = [
	{
		id: 1,
		author: "Sarah Jenkins",
		role: "Tutor",
		avatar: "https://placehold.co/100x100/4f46e5/ffffff?text=SJ",
		time: "2 hours ago",
		content: "Just published a new module on Advanced React Patterns! 🚀 We dive deep into Composition vs Inheritance and custom hooks.",
		likes: 124,
		comments: 45,
		tags: ["#React", "#WebDev", "#Learning"],
		image: "https://placehold.co/600x300/e0e7ff/4338ca?text=React+Patterns+Preview"
	},
	{
		id: 2,
		author: "David Chen",
		role: "Learner",
		avatar: "https://placehold.co/100x100/ec4899/ffffff?text=DC",
		time: "4 hours ago",
		content: "Does anyone have good resources for understanding Kubernetes services? I'm struggling with the difference between ClusterIP and NodePort.",
		likes: 32,
		comments: 12,
		tags: ["#DevOps", "#Kubernetes", "#Help"],
		isQuestion: true
	},
	{
		id: 3,
		author: "PPStack Team",
		role: "Admin",
		avatar: null,
		time: "1 day ago",
		content: "Community Challenge: Build a To-Do app using only HTML/CSS/JS this weekend!",
		likes: 540,
		comments: 89,
		tags: ["#Challenge", "#Coding"],
	}
];

const EVENTS = [
	{
		id: 101,
		title: "System Design Live Q&A",
		host: "Alex Xu",
		date: "Tomorrow, 6:00 PM",
		attendees: 342,
		image: "https://placehold.co/400x200/1e293b/ffffff?text=System+Design",
		type: "Live Stream"
	},
	{
		id: 102,
		title: "Resume Review Session",
		host: "Career Team",
		date: "Wed, Oct 24 • 2:00 PM",
		attendees: 120,
		image: "https://placehold.co/400x200/4f46e5/ffffff?text=Resume+Workshop",
		type: "Workshop"
	}
];

const TRENDING_TOPICS = [
	{ tag: "#React19", posts: "2.4k posts" },
	{ tag: "#AIJobs", posts: "1.8k posts" },
	{ tag: "#PPStackChallenge", posts: "900 posts" },
	{ tag: "#PythonBasics", posts: "500 posts" },
];

const NavbarMock = () => (
	<div className="fixed top-0 inset-x-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 flex items-center justify-between px-4 lg:px-8">
		<div className="flex items-center gap-2 font-bold text-xl text-indigo-900">
			<div className="bg-indigo-600 p-1.5 rounded-lg"><Home className="text-white w-5 h-5" /></div>
			PPStack
		</div>
		<div className="hidden md:flex relative max-w-md w-full mx-4">
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
			<input type="text" placeholder="Search community..." className="w-full pl-10 pr-4 py-2 bg-gray-100/50 border-0 rounded-full focus:ring-2 focus:ring-indigo-500 transition-all" />
		</div>
		<div className="flex items-center gap-4">
			<button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors relative">
				<Bell className="w-5 h-5" />
				<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
			</button>
			<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md cursor-pointer">AL</div>
		</div>
	</div>
);

const CreatePost = () => (
	<div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
		<div className="flex gap-3">
			<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0">AL</div>
			<div className="flex-1">
				<input
					type="text"
					placeholder="Share your thoughts or ask a question..."
					className="w-full bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all hover:bg-gray-100"
				/>
				<div className="flex justify-between items-center mt-3">
					<div className="flex gap-2">
						<button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-2 text-xs font-medium">
							<ImageIcon size={16} /> Photo
						</button>
						<button className="p-2 text-gray-400 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors flex items-center gap-2 text-xs font-medium">
							<Video size={16} /> Live
						</button>
					</div>
					<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
						Post <Send size={14} />
					</button>
				</div>
			</div>
		</div>
	</div>
);

const FeedPost = ({ post }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow"
	>
		<div className="flex justify-between items-start mb-3">
			<div className="flex gap-3">
				{post.avatar ? (
					<img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
				) : (
					<div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
						<Users size={20} />
					</div>
				)}
				<div>
					<h3 className="font-bold text-gray-900 text-sm">{post.author}</h3>
					<p className="text-xs text-gray-500">{post.role} • {post.time}</p>
				</div>
			</div>
			<button className="text-gray-300 hover:text-gray-600"><MoreHorizontal size={20} /></button>
		</div>

		{post.isQuestion && (
			<span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded mb-2">
				Question
			</span>
		)}

		<p className="text-gray-700 text-sm leading-relaxed mb-4 whitespace-pre-wrap">{post.content}</p>

		{post.image && (
			<div className="mb-4 rounded-xl overflow-hidden border border-gray-100">
				<img src={post.image} alt="Post attachment" className="w-full object-cover" />
			</div>
		)}

		{post.tags && (
			<div className="flex gap-2 mb-4 flex-wrap">
				{post.tags.map(tag => (
					<span key={tag} className="text-indigo-600 text-xs font-medium hover:underline cursor-pointer">{tag}</span>
				))}
			</div>
		)}

		<div className="flex items-center justify-between pt-4 border-t border-gray-50">
			<div className="flex gap-6">
				<button className="flex items-center gap-1.5 text-gray-500 hover:text-pink-600 transition-colors text-sm font-medium group">
					<Heart size={18} className="group-hover:scale-110 transition-transform" /> {post.likes}
				</button>
				<button className="flex items-center gap-1.5 text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium">
					<MessageSquare size={18} /> {post.comments}
				</button>
			</div>
			<button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
				<Share2 size={18} /> Share
			</button>
		</div>
	</motion.div>
);

const EventCard = ({ event }) => (
	<motion.div
		whileHover={{ y: -4 }}
		className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4 group cursor-pointer"
	>
		<div className="h-32 bg-gray-200 relative">
			<img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
			<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-indigo-900 shadow-sm">
				{event.type}
			</div>
		</div>
		<div className="p-4">
			<p className="text-xs font-bold text-indigo-600 mb-1 flex items-center gap-1">
				<Calendar size={12} /> {event.date}
			</p>
			<h3 className="font-bold text-gray-900 mb-2 truncate">{event.title}</h3>
			<div className="flex items-center justify-between">
				<div className="flex -space-x-2">
					 {[1,2,3].map(i => (
						 <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
					 ))}
					 <span className="text-xs text-gray-500 pl-3 pt-1">+{event.attendees} going</span>
				</div>
				<button className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
					RSVP
				</button>
			</div>
		</div>
	</motion.div>
);

export default function CommunityPage() {
	const [activeTab, setActiveTab] = useState('feed');

	return (
		<div className="min-h-screen bg-gray-50/50 pb-20">
			<NavbarMock />

			<main className="max-w-7xl mx-auto pt-24 px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
				<aside className="hidden lg:block lg:col-span-3 space-y-6">
					<div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 sticky top-24">
						<nav className="space-y-1">
							{[
								{ id: 'feed', icon: Home, label: "News Feed" },
								{ id: 'events', icon: Calendar, label: "Events & Webinars" },
								{ id: 'squads', icon: Users, label: "Study Squads" },
								{ id: 'leaderboard', icon: Award, label: "Leaderboard" }
							].map(item => (
								<button
									key={item.id}
									onClick={() => setActiveTab(item.id)}
									className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
										activeTab === item.id
										? 'bg-indigo-50 text-indigo-700'
										: 'text-gray-600 hover:bg-gray-50'
									}`}
								>
									<item.icon size={18} className={activeTab === item.id ? 'text-indigo-600' : 'text-gray-400'} />
									{item.label}
								</button>
							))}
						</nav>

						<div className="mt-8 pt-6 border-t border-gray-50">
							<h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">Your Squads</h3>
							<div className="space-y-3">
								{['React Developers', 'Python Beginners', 'System Design'].map((group, i) => (
									<div key={i} className="flex items-center gap-3 px-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
										<span className="w-2 h-2 rounded-full bg-indigo-400" />
										<span className="text-sm font-medium text-gray-700">{group}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</aside>

				<div className="lg:col-span-6">
					<AnimatePresence mode="wait">
						{activeTab === 'feed' && (
							<motion.div key="feed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
								<CreatePost />
								{POSTS.map(post => <FeedPost key={post.id} post={post} />)}
							</motion.div>
						)}

						{activeTab === 'events' && (
							<motion.div key="events" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-6">
								<div className="flex justify-between items-center mb-2">
									<h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
									<button className="text-indigo-600 text-sm font-medium hover:underline">View All</button>
								</div>
								{EVENTS.map(event => <EventCard key={event.id} event={event} />)}
								<div className="bg-indigo-600 rounded-2xl p-6 text-white text-center mt-4">
									<h3 className="font-bold text-lg mb-2">Host your own event?</h3>
									<p className="text-indigo-100 text-sm mb-4">Tutors can create live sessions for the community.</p>
									<button className="bg-white text-indigo-600 px-6 py-2 rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all">Create Event</button>
								</div>
							</motion.div>
						)}

						{(activeTab === 'squads' || activeTab === 'leaderboard') && (
							 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-12 rounded-2xl text-center border border-gray-100 shadow-sm">
								 <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
									 <Users size={32} />
								 </div>
								 <h3 className="text-lg font-bold text-gray-900">Coming Soon</h3>
								 <p className="text-gray-500">This feature is currently under development.</p>
							 </motion.div>
						)}
					</AnimatePresence>
				</div>

				<aside className="hidden lg:block lg:col-span-3 space-y-6">
					<div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 sticky top-24">
						<div className="flex items-center gap-2 mb-4 text-gray-900 font-bold">
							<TrendingUp size={20} className="text-indigo-600" />
							<h2>Trending Topics</h2>
						</div>
						<div className="space-y-4">
							{TRENDING_TOPICS.map((topic, i) => (
								<div key={i} className="group cursor-pointer">
									<p className="text-sm font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{topic.tag}</p>
									<p className="text-xs text-gray-500">{topic.posts}</p>
								</div>
							))}
						</div>
						<button className="w-full mt-4 py-2 text-xs font-bold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">Show More</button>
					</div>

					<div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-5 shadow-lg text-white">
						<h3 className="font-bold mb-4 flex items-center gap-2">
							<Star size={16} className="text-yellow-400" /> Top Contributors
						</h3>
						<div className="space-y-4">
							{[1, 2].map((user, i) => (
								<div key={i} className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">U{user}</div>
									<div>
										<p className="text-sm font-bold">User {user}</p>
										<p className="text-[10px] text-indigo-200">12.5k reputation</p>
									</div>
									<button className="ml-auto bg-white text-indigo-900 text-[10px] font-bold px-2 py-1 rounded">Follow</button>
								</div>
							))}
						</div>
					</div>
				</aside>

			</main>
		</div>
	);
}