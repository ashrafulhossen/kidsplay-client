import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import ShopByCategoryToys from "./ShopByCategoryToys";

const ShopByCategory = () => {
	return (
		<div className="max-w-7xl mx-auto px-8">
			<h2 className="text-4xl font-bold text-center">Shop By Category</h2>
			<div>
				<Tabs>
					<TabList>
						<Tab>Science</Tab>
						<Tab>Math</Tab>
						<Tab>Engineering</Tab>
					</TabList>

					<TabPanel>
						<Tabs>
							<TabList>
								<Tab>Chemistry</Tab>
								<Tab>Biology</Tab>
								<Tab>Physics</Tab>
							</TabList>
							<TabPanel>
								<ShopByCategoryToys subCategory={"Chemistry"} />
							</TabPanel>
							<TabPanel>
								<ShopByCategoryToys subCategory={"Biology"} />
							</TabPanel>
							<TabPanel>
								<ShopByCategoryToys subCategory={"Physics"} />
							</TabPanel>
						</Tabs>
					</TabPanel>
					<TabPanel>
						<Tabs>
							<TabList>
								<Tab>Basic</Tab>
								<Tab>Intermediate</Tab>
								<Tab>Advance</Tab>
							</TabList>
							<TabPanel>
								<ShopByCategoryToys subCategory={"Basic"} />
							</TabPanel>
							<TabPanel>
								<ShopByCategoryToys
									subCategory={"Intermediate"}
								/>
							</TabPanel>
							<TabPanel>
								<ShopByCategoryToys subCategory={"Advance"} />
							</TabPanel>
						</Tabs>
					</TabPanel>
					<TabPanel>
						<Tabs>
							<TabList>
								<Tab>LEGO</Tab>
								<Tab>Robotics</Tab>
								<Tab>Renewable Energy</Tab>
							</TabList>
							<TabPanel>
								<ShopByCategoryToys subCategory={"LEGO"} />
							</TabPanel>
							<TabPanel>
								<ShopByCategoryToys
									subCategory={"Robotics"}
								/>
							</TabPanel>
							<TabPanel>
								<ShopByCategoryToys subCategory={"Renewable Energy"} />
							</TabPanel>
						</Tabs>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default ShopByCategory;
