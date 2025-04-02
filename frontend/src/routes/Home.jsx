import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export default function Home() {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-4">
                <div className="flex flex-col items-center md:flex-row md:justify-between bg-white p-6 rounded-lg shadow-md">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold">Makeee <span className="text-red-500">Healthy</span></h1>
                        <h1 className="text-4xl font-bold">Eating Fun</h1>
                        <p className="mt-2 text-gray-600">Track your child's meals, encourage healthy habits, and earn rewards together!</p>
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                            Join us now <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <img src="https://storage.googleapis.com/a1aa/image/esUKB6Ks9Bnn-lqQOloeNpCEHNzzxMb7hwznp8E9faE.jpg" alt="Children eating healthy food illustration" width="200" height="200" />
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-center">What we provide?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/hSKYwC1DsXJz8Caa5ckCfCHer0gbVodl9KQtIMKxm3Y.jpg" alt="Nutrition Calculation" width="100" height="100" />
                            <p className="mt-2 font-bold">Nutrition Calculation</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/66r-oH2RsVumxDguNO1nCt77NQy6y1jW-MDEL4yw7TY.jpg" alt="Diet Monitoring" width="100" height="100" />
                            <p className="mt-2 font-bold">Diet Monitoring</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/kb7yDfp_vUAp79JCpqjm7ti9p4v_DJMl97iVMZGHLxo.jpg" alt="Expert tips for parents" width="100" height="100" />
                            <p className="mt-2 font-bold">Expert tips for parents</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/66r-oH2RsVumxDguNO1nCt77NQy6y1jW-MDEL4yw7TY.jpg" alt="Diet Monitoring" width="100" height="100" />
                            <p className="mt-2 font-bold">Diet Monitoring</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/y-w1RUPcqLKe2iinD1cCx2EmONKjfoOtiju-jAOwc8k.jpg" alt="Personalised Feedback" width="100" height="100" />
                            <p className="mt-2 font-bold">Personalised Feedback</p>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg shadow-md text-center flex justify-center items-center">
                            <img src="https://storage.googleapis.com/a1aa/image/22kjRkCecE7vE-xns3I8h0RdFWN56Mrj10tonX-x0C0.jpg" alt="Check Body Mass Index" width="100" height="100" />
                            <p className="mt-2 font-bold">Check Body Mass Index</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold text-green-700">Join Us on This Journey!</h2>
                    <div className="mt-6 flex flex-col items-center">
                        <img src="https://storage.googleapis.com/a1aa/image/bAVdSogbkHNN87rpnb4_dXcPlN6fEa0mp2I0Gmgxtbo.jpg" alt="Child character illustration" width="100" height="100" />
                        <p className="mt-4 text-gray-600 max-w-lg">Join the NutriBytes community and transform mealtime into a rewarding experience. Together, we can nurture a healthier future—one bite at a time.</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-bold">Share your Journey With Us !!</h2>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};