// eslint-disable-next-line no-unused-vars
import React from "react";

const Blogs = () => {
	return (
		<div className="max-w-7xl mx-auto px-8 py-16">
			<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title text-xl bg-gradient peer-checked:bg-gradient text-zinc-700 px-8 font-bold peer-checked:border-b">
					1. What is an access token and refresh token? How do they
					work and where should we store them on the client-side?
				</div>
				<div className="collapse-content bg-gradient peer-checked:bg-gradient peer-checked:text-white font-semibold text-zinc-500 pl-14 pt-4 pr-8 ">
					<p>
						#. An access token is token-based authentication to give
						access to a user.
					</p>
					<p>
						#. A refresh token is used to re-validate a user without
						re-enter their login information multiple times.
					</p>
					<p>
						#. An access token is used for successful user
						authentication and authorization to access specific
						resources. It exist for limited time. When the access
						token is expires a refresh token is used to get an
						access token from the server without user
						re-authentication.
					</p>
					<p>
						#. We should store them in HTTP-only cookie on the
						client-side.
					</p>
				</div>
			</div>
			<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title text-xl bg-gradient peer-checked:bg-gradient text-zinc-700 px-8 font-bold peer-checked:border-b">
					2. Compare SQL and NoSQL databases?
				</div>
				<div className="collapse-content bg-gradient peer-checked:bg-gradient peer-checked:text-white font-semibold text-zinc-500 pl-14 pt-4 pr-8 ">
					<p>
						#. SQL databases are relational databases. They are
						structured databases that use tables to store data.
						MySQL, PostgreSQL, Oracle Database etc are SQL database.
					</p>
					<p>
						#. NoSQL database are non-relational database. They are
						dynamic structured database. They can store
						unstructured, semi-structured or polymorphic data.
						MongoDB, Cassandra etc are NoSQL database
					</p>
				</div>
			</div>
			<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title text-xl bg-gradient peer-checked:bg-gradient text-zinc-700 px-8 font-bold peer-checked:border-b">
					3. What is express js? What is Nest JS ?
				</div>
				<div className="collapse-content bg-gradient peer-checked:bg-gradient peer-checked:text-white font-semibold text-zinc-500 pl-14 pt-4 pr-8 ">
					<p>
						#. Express js is a flexible nodejs web application
						framework.
					</p>
					<p>
						#. Nest js is one of the fastest growing nodejs
						frameworks. It is used for building efficient, scalable
						application using nodejs
					</p>
				</div>
			</div>
			<div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title text-xl bg-gradient peer-checked:bg-gradient text-zinc-700 px-8 font-bold peer-checked:border-b">
					4. What is MongoDB aggregate and how does it work?
				</div>
				<div className="collapse-content bg-gradient peer-checked:bg-gradient peer-checked:text-white font-semibold text-zinc-500 pl-14 pt-4 pr-8 ">
					<p>
						#. MongoDb aggregate is a way of processing a large
						amount of data the collection by performimg different
						operations. In every operation happens in a stage called
						pipeline. Different pipeline is used for different
						operations like filter, sort etc.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
