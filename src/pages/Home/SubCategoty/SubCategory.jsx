import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SubCategoryCard from './SubCategoryCard';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SubCategory = () => {
    const [allToys, setAllToys] = useState([]);
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        fetch(`https://boom-auto-server.vercel.app/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
            .catch(error => toast.error(error.message))
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <Tabs>
            <TabList>
                <Tab onClick={() => handleTabClick('')}>Toy Cars</Tab>
            </TabList>

            <TabPanel>
                <Tabs>
                    <TabList>
                        <Tab onClick={() => handleTabClick('')}>All</Tab>
                        <Tab onClick={() => handleTabClick('Sports_cars')}>Sports Cars</Tab>
                        <Tab onClick={() => handleTabClick('Regular_cars')}>Regular Cars</Tab>
                        <Tab onClick={() => handleTabClick('Police_cars')}>Police Cars</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {
                                allToys.map(toys => <SubCategoryCard
                                    key={toys._id}
                                    toys={toys}
                                ></SubCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {
                                allToys.map(toys => <SubCategoryCard
                                    key={toys._id}
                                    toys={toys}
                                ></SubCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {
                                allToys.map(toys => <SubCategoryCard
                                    key={toys._id}
                                    toys={toys}
                                ></SubCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {
                                allToys.map(toys => <SubCategoryCard
                                    key={toys._id}
                                    toys={toys}
                                ></SubCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </TabPanel>
        </Tabs>
    );
};

export default SubCategory;

