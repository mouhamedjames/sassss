
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile  from "../component/profile.js"
import detectUserLanguage from '../component/detection/LanguageDetector.js';
import { useTranslation } from 'react-i18next';
import i18n from '../component/detection/i18n.js';
import {  useNavigate,NavLink } from "react-router-dom";
import Select from 'react-select';
import "./link.scss"
import axios from "axios"
import Loader from "../component/loader/loader.js"
 const Link = () => {



 const {t} =useTranslation()
 const options = [
  { value: 'Meydan', label: 'Meydan' },
  { value: 'Downtown Dubai', label: 'Downtown Dubai' },
  { value: 'Bluewaters', label: 'Bluewaters' },
  { value: 'Dubai Creek Harbour', label: 'Dubai Creek Harbour' },
  { value: 'DIFC', label: 'DIFC' },
];
 const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en')
    const [stage, setStage] = useState('start');
    const [propertyType, setPropertyType] = useState('');
    const [bedroomType, setBedroomType] = useState('');
    const [ipInfos, setIpInfos] = useState(null);
    const [isloading, setisloading] = useState(false);
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1000);
    const [type, settype] = useState("");
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
    });
    const Navigate =useNavigate()
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    const handleFromPriceChange = (e) => {
      setFromPrice(parseInt(e.target.value));
    };
  
    const handleToPriceChange = (e) => {
      setToPrice(parseInt(e.target.value));
    };
    const [selectedOptions, setSelectedOptions] = useState([options[1]]);
      const userAgent = navigator.userAgent;
      console.log(userAgent)
      
    const handleRentClick = () => {
      setStage('propertyType');
      settype("rent")
    };
  
    const handleSellClick = () => {
      setStage('propertyType');
      settype("sell")
    };
  
    const handlebuyClick = () => {
      setStage('propertyType');
      settype("buy")
    };
  
    const handlePropertyTypeClick = (type) => {
      setPropertyType(type);
      setStage('bedroomType');
    };
  
    const handleBedroomTypeClick = (type) => {
        setBedroomType(type);
        setStage('locations');
      };

   

      useEffect(() => {
        // Fetch IP information including country, zip code, and street
        fetch('https://ipinfo.io?token=5974b775d29492')
          .then(response => response.json())
          .then(data => setIpInfos(data))
          .catch(error => console.error('Error fetching IP information:', error))
          const a =detectUserLanguage()
          if (a !== 'en') {
            setShowLanguageSelector(false);
          } else {
            setShowLanguageSelector(true);
          }
          
          ;
      }, []);
   
      const confirmLanguage = () => {
        setShowLanguageSelector(false);
        // Set the user's selected language as the active language
       
      };
    
      const changeToEnglish = () => {
        setShowLanguageSelector(false);
     
        // Set the language explicitly to English
        i18n.changeLanguage('en');
      };
    
    
      const handleBudgetInput = () => {
        
        
          setStage('budget');
        
      };
     
      const handleContactInfoSubmit =async (e) => {
        e.preventDefault() // to block any event
        setisloading(true)
        try{
          const data =await axios.post("http://localhost:8500/api/createlink", {proprety:propertyType ,rooms:bedroomType,fromprice:fromPrice,toprice:toPrice,contact:formData,address:selectedOptions,category:type })
Navigate("/Success")

          console.log("work")

        }
        catch{
          console.log("notwork")
        }
      };
      const handleSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
      };
    return (
      <div >
        <div className="container">
          {stage === 'start' && (
            <div>
              {showLanguageSelector ? 
 <div>

   <p>confirmLanguage</p>
   
      <button onClick={confirmLanguage}>confirm</button>
      <button onClick={changeToEnglish}>changeToEnglish</button>
 </div>
 : 
 <div><button className="green-button">OPENING QUESTION</button>
 <br></br> 
   <p className="paragraph">"Tell me what you're looking for"?</p>
   <br></br>
    <p className="paragraph">I want to ...</p>
        <div className="button-container">
        <div>
            <button className="gray-button"onClick={handlebuyClick}>{t('buy')}</button>
            </div>
            <div>
            <button className="gray-button"onClick={handleRentClick}>{t('rent')}</button></div>
            <div><button className="gray-button"onClick={handleSellClick}>{t('sell')}</button></div>
        </div>
              
            </div>}
            </div>
          )}
          {stage === 'propertyType' && (
            <div>
            <button className="green-button">PROPERTY TYPE</button>
            <p className="paragraph">“WHAT KIND OFPROPERTY”?</p>
            <br></br>
    <p className="paragraph">I’M LOOKING FOR...</p>
            <div className="button-container">
            <div>
              <button className="gray-button" onClick={() => handlePropertyTypeClick('Apartment')}>Apartment</button>
              </div>
              <div>
              <button className="gray-button" onClick={() => handlePropertyTypeClick('PENTHOUSE')}>PENTHOUSE</button>
              </div>
              <div>
              <button className="gray-button" onClick={() => handlePropertyTypeClick('STUDIO')}>STUDIO</button>
              </div>
              <div>
              <button className="gray-button" onClick={() => handlePropertyTypeClick('VILLA')}>VILLA</button>
              </div>
              <div>
              <button className="gray-button" onClick={() => handlePropertyTypeClick('TOWNHOUSE')}>TOWNHOUSE</button>
              </div>
              <div>
              <button className="gray-button" onClick={() => handlePropertyTypeClick('Commercial')}>Commercial</button>
              </div>
            </div>
            </div>
          )}
          {stage === 'bedroomType' && (
            <div>
            <button className="green-button">BEDROOM</button>
            <p className="paragraph">“HOW MANY BEDROOM”?</p>
            <br></br>
    <p className="paragraph">I’M LOOKING FOR...</p>
    <div>
              <button className="gray-button" onClick={() => handleBedroomTypeClick('1  Bed')}>1 BEDROOM</button>
              </div>
              <div>
              <button className="gray-button" onClick={() => handleBedroomTypeClick('2  Bed')}>2 BEDROOMS</button>
              </div><div>
              <button className="gray-button" onClick={() => handleBedroomTypeClick('3  Bed')}>3 BEDROOMS</button>
              </div><div>
              <button className="gray-button" onClick={() => handleBedroomTypeClick('4  Bed')}>4 BEDROOMS</button>
              </div>
            </div>
          )}
     {stage === 'locations' && (
          <div>
             <button className="green-button">LOCATION</button>
            <p className="paragraph">“WHERE”?</p>
            <br></br>
            <div>
      <h2>I’M LOOKING FOR...</h2>
      <Select
        isMulti
        options={options}
        onChange={handleSelectChange}
        value={selectedOptions}
      />
      <p>Selected Options:</p>
      <ul>
        {selectedOptions.map((option) => (
          <li key={option.value}>{option.label}</li>
        ))}
      </ul>
    </div>
            <button className="gray-button" onClick={handleBudgetInput}>Next</button>
          </div>
        )}

        {stage === 'budget' && (
          <div>
              <button className="green-button">BUDGET - PRICING</button>
            <p className="paragraph">““WHAT’S YOURBUDGET”?”?</p>
            <br></br>
            <div className="price-menu">
            <h2>MY BUDGET IS...</h2>
      <label htmlFor="fromPrice">From:</label>
      <select id="fromPrice" value={fromPrice} onChange={handleFromPriceChange}>
        <option value="0">0 AED</option>
        <option value="1000">1,000 AED</option>
        <option value="2000">2,000 AED</option>
        {/* Add more options as needed */}
      </select>

      <label htmlFor="toPrice">To:</label>
      <select id="toPrice" value={toPrice} onChange={handleToPriceChange}>
        <option value="1000">1,000 AED</option>
        <option value="2000">2,000 AED</option>
        <option value="3000">3,000 AED</option>
        {/* Add more options as needed */}
      </select>
    </div>
    <div>
            <button className="gray-button" onClick={() => setStage('contactInfo')}>Next</button></div>
          </div>
        )}

        {stage === 'contactInfo' && (
          <div>
            {isloading && <Loader />}
             <h2>User Information</h2>
      <form className="price-menu" >
        <div >
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

       
      </form>
      <div>
            <button className="gray-button" onClick={handleContactInfoSubmit}>Confirm</button>
          </div>
          </div>
        )}
        </div>
        
      </div>
    );
  }
export default Link