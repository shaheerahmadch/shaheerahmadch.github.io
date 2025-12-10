import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Loader, Play } from 'lucide-react';
import './ContentFeed.css';

const ContentFeed = () => {
    const [activeTab, setActiveTab] = useState('blogs');
    const [posts, setPosts] = useState([]);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Placeholder Channel ID - User needs to update this
    const YOUTUBE_CHANNEL_ID = "365ConnectCommunity";
    const BLOG_RSS_URL = "https://shaheer365.blogspot.com/feeds/posts/default?alt=rss";
    const YOUTUBE_RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch Blogs
                const blogRes = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(BLOG_RSS_URL)}`);
                const blogData = await blogRes.json();

                if (blogData.status === 'ok') {
                    setPosts(blogData.items.slice(0, 3).map(item => ({
                        type: "Blog",
                        title: item.title,
                        date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                        link: item.link,
                        image: item.thumbnail || "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
                    })));
                } else {
                    // Fallback Blogs
                    setPosts([
                        {
                            type: "Blog",
                            title: "Power Apps Code Apps: Create Your First Code App",
                            date: "Aug 21, 2025",
                            link: "https://shaheer365.blogspot.com/2025/08/power-apps-code-apps-create-your-first.html",
                            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
                        },
                        {
                            type: "Blog",
                            title: "Dynamically Retrieve the HTTP URL of an HTTP-Triggered Power Automate Flow",
                            date: "Feb 02, 2025",
                            link: "https://shaheer365.blogspot.com/2025/02/dynamically-retrieve-http-url-of-http.html",
                            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                        },
                        {
                            type: "Blog",
                            title: "Automate Solution Imports from GitHub to Power Apps",
                            date: "Nov 02, 2024",
                            link: "https://shaheer365.blogspot.com/2024/11/automate-solution-imports-from-github.html",
                            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop"
                        }
                    ]);
                }

                // Fetch Videos
                // Note: This will likely fail with the placeholder ID, triggering the fallback
                const videoRes = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(YOUTUBE_RSS_URL)}`);
                const videoData = await videoRes.json();

                if (videoData.status === 'ok') {
                    setVideos(videoData.items.slice(0, 3).map(item => ({
                        type: "Video",
                        title: item.title,
                        date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                        link: item.link,
                        image: item.thumbnail || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
                    })));
                } else {
                    // Fallback Videos
                    setVideos([
                        {
                            type: "Video",
                            title: "Building the Future with Power Platform",
                            date: "Nov 15, 2024",
                            link: "https://www.youtube.com/@365ConnectCommunity",
                            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
                        },
                        {
                            type: "Video",
                            title: "Dynamics 365 & AI Integration",
                            date: "Oct 28, 2024",
                            link: "https://www.youtube.com/@365ConnectCommunity",
                            image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop"
                        },
                        {
                            type: "Video",
                            title: "Community Call: November 2024",
                            date: "Nov 01, 2024",
                            link: "https://www.youtube.com/@365ConnectCommunity",
                            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                        }
                    ]);
                }

            } catch (err) {
                console.error("Error fetching content:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const displayItems = activeTab === 'blogs' ? posts : videos;

    return (
        <section id="blog" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Latest Updates</h2>

                <div className="feed-tabs">
                    <button
                        className={`feed-tab ${activeTab === 'blogs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('blogs')}
                    >
                        Blogs
                    </button>
                    <button
                        className={`feed-tab ${activeTab === 'videos' ? 'active' : ''}`}
                        onClick={() => setActiveTab('videos')}
                    >
                        Videos
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center py-12" style={{ display: 'flex', justifyContent: 'center', padding: '3rem 0' }}>
                        <Loader className="animate-spin text-blue-500" size={40} />
                    </div>
                ) : (
                    <div className="feed-grid">
                        <AnimatePresence mode="wait">
                            {displayItems.map((item, index) => (
                                <motion.div
                                    key={`${activeTab}-${index}`}
                                    className="feed-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <div className="feed-image">
                                        <img src={item.image} alt={item.title} loading="lazy" />
                                        <span className="feed-type-badge">{item.type}</span>
                                        {item.type === 'Video' && <Play className="play-icon" size={32} fill="currentColor" />}
                                    </div>
                                    <div className="feed-content">
                                        <span className="feed-date">{item.date}</span>
                                        <h3 className="feed-title">{item.title}</h3>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="feed-link">
                                            {item.type === 'Video' ? 'Watch Video' : 'Read More'} <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                <div className="text-center mt-12" style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href={activeTab === 'blogs' ? "https://shaheer365.blogspot.com/" : "https://www.youtube.com/@365ConnectCommunity"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        {activeTab === 'blogs' ? 'View All Posts' : 'Visit Channel'} <ArrowRight size={20} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default ContentFeed;
