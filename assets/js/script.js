'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all modal items
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// Add event in all select items
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category.toLowerCase()) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// ChatGPT
document.addEventListener("DOMContentLoaded", function() {
  const projectLinks = document.querySelectorAll(".project-link");
  const modalContainer = document.getElementById("project-modal");

  if (!modalContainer) {
    console.error("Modal not found.");
    return;
  }

  projectLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const projectItem = this.closest(".project-item");

      if (!projectItem) {
        console.error("Project item not found.");
        return;
      }

      const projectTitle = projectItem.querySelector(".project-title")?.textContent || "No title";
      let modalDescription, newImageSrc, additionalContent, projectLink;

      switch (projectTitle) {

        case "Fabric Defect Detection":
          modalDescription = "The approach used here is based on image segmentation, which involves partitioning the image into different regions based on their visual characteristics.";
          newImageSrc = "./assets/images/project-40.png";
          additionalContent = `
            <div class="blog-image">
              <img src="./assets/images/project-41.png" alt="Additional Image" loading="lazy">
            </div>
            <p class="blog-description">Benefits:</p>
            <p class="blog-description">• Quality Control in Textile Industry</p>
            <p class="blog-description">• Efficient Fabric Inspection</p>
            <p class="blog-description">• Reduced Fabric Waste</p>
            <p class="blog-description">• Improved Product Quality</p>
            <div class="blog-image">
              <img src="./assets/images/project-42.png" alt="Another Image" loading="lazy">
            </div>
          `;
          projectLink = "https://github.com/brenmathew/Fabric_Defect_detection";
          break;  

        case "Netflix":
          modalDescription = "The following is a Netflix Analysis of various TV Shows and Movies acquired from a dataset through Kaggle. We can see the description and genres of movies all at once through this dashboard.";
          newImageSrc = "./assets/images/project-20.png";
          additionalContent = `
            <div class="blog-image">
              <img src="./assets/images/project-21.png" alt="Additional Image" loading="lazy">
            </div>
            <p class="blog-description">This project is for Netflix. Below are the key insights:</p>
            <p class="blog-description">• Analyze TV shows and movie genres</p>
            <p class="blog-description">• Interactive dashboard to filter data</p>
            <p class="blog-description">• Comprehensive overview of Netflix's content library</p>
            <div class="blog-image">
              <img src="./assets/images/project-22.png" alt="Another Image" loading="lazy">
            </div>
          `;
          projectLink = "https://public.tableau.com/app/profile/brenmathew/viz/NetflixAnalysis_16769869059570/Netflix";
          break;

         case "Building an ML model using AWS":
          modalDescription = "The following project is built on Amazon Cloud. Here we have used the Sagemaker tool in AWS. AWS is capable of deploying Machine Learning models into the production environment, handling large LLM's depending on the company's requirements";
          newImageSrc = "./assets/images/project-30.jpg";
          additionalContent = `
            <div class="blog-image">
              <img src="./assets/images/project-31.png" alt="Additional Image" loading="lazy">
            </div>
            <p class="blog-description">This project is for AWS. Below are the key insights:</p>
            <p class="blog-description">• Created a new instance</p>
            <p class="blog-description">• Specified necessary roles for deploying the model</p>
            <p class="blog-description">• Ran Tensorflow Code in Jupyter notebook to test the model</p>
            <div class="blog-image">
              <img src="./assets/images/project-32.png" alt="Another Image" loading="lazy">
            </div>
          `;
          projectLink = "https://github.com/brenmathew/Sagemaker_TFModel";
          break;
        
          
        case "Super Market sales analysis":
          modalDescription = "This project analyzes supermarket sales data to gain insights into product performance, customer behavior, and revenue trends.";
          newImageSrc = "./assets/images/project-09.png";
          additionalContent = `
            <div class="blog-image">
              <img src="./assets/images/project-11.png" alt="Additional Image" loading="lazy">
            </div>
            <p class="blog-description">Below are some following questions analyzed on this dataset:</p>
            <p class="blog-description">• What are the most selling Products?</p>
            <p class="blog-description">• Which are the top 10 Products according to Sales?</p>
            <p class="blog-description">• Which Products have proved to be the most profitable?</p>
            <p class="blog-description">• What category sold the most?</p>
            <p class="blog-description">• Which category is the most Profitable?</p>
            <p class="blog-description">• What are the most selling products in each subcategory?</p>
            <p class="blog-description">• Which customer segments are the most profitable?</p>
            <p class="blog-description">• Which Shipping modes sold the most products?</p>
            <p class="blog-description">• What markets sold the most Products?</p>
            <p class="blog-description">• Which are the top 10 countries by sales?</p>
            <p class="blog-description">• What's the average shipping cost for the top 10 different countries?</p>
            <div class="blog-image">
              <img src="./assets/images/project-12.png" alt="Another Image" loading="lazy">
            </div>
          `;
          projectLink = "https://github.com/brenmathew/Super-Market-Sales_analysis";
          break;

        case "Customer Analysis":
        modalDescription = "The following is a dashboard created on customer analysis for an E-commerce website. The visuals can be categorized based on sales from each state, revenue generated, and the various products purchased.";
        newImageSrc = "./assets/images/project-50.png";
        additionalContent = `
          <div class="blog-image">
            <img src="./assets/images/project-51.png" alt="Additional Image" loading="lazy">
          </div>
          <p class="blog-description">Below are the key insights:</p>
          <p class="blog-description">• In-depth analysis of sales across different states</p>
          <p class="blog-description">• Visualization of revenue generated by state</p>
          <p class="blog-description">• Detailed breakdown of various products purchased</p>
          <div class="blog-image">
            <img src="./assets/images/project-52.png" alt="Another Image" loading="lazy">
          </div>
        `;
        projectLink = "https://public.tableau.com/app/profile/brenmathew/viz/CustomerAnalysis_16883802377440/Dashboard1";
        break;

       case "Gender Diversity":
        modalDescription = "The following is a dashboard created on Gender Diversity. This is a task I completed at my virtual internship program with PWC. The client requires a visual to understand the gender diversity across the company by understanding the relevant KPI's";
        newImageSrc = "./assets/images/project-100.png";
        additionalContent = `
          <div class="blog-image">
            <img src="./assets/images/project-101.png" alt="Additional Image" loading="lazy">
          </div>
          <p class="blog-description">Below are the key insights:</p>
          <p class="blog-description">• Displays relevant KPIs in hiring, promotion, performance and turnover</p>
          <p class="blog-description">• Understood the gender diversity across the company</p>
          <p class="blog-description">• Key statistics to understand the reason for leavers and turnovers</p>
          <div class="blog-image">
            <img src="./assets/images/project-102.png" alt="Another Image" loading="lazy">
          </div>
        `;
        projectLink = "https://github.com/brenmathew/Gender_Diversity";
        break;
          
       case "Fraud Detection":
        modalDescription = "This project includes a collection of scripts and modules that handle various aspects of fraud detection, including data preprocessing, model training, evaluation, and prediction. It aims to provide an end-to-end solution for fraud detection tasks.";
        newImageSrc = "./assets/images/project-60.png";
        additionalContent = `
          <div class="blog-image">
            <img src="./assets/images/project-61.png" alt="Fraud Detection Details" loading="lazy">
          </div>
          <p class="blog-description">Key insights:</p>
          <ul class="blog-description">
            <li>• Used Random Forest Classifier to achieve high accuracy</li>
            <li>• Important features: transaction amount, balances.</li>
            <li>• Track fraud rates to assess prevention effectiveness.</li>
          </ul>
          <div class="blog-image">
            <img src="./assets/images/project-62.png" alt="More Fraud Detection Details" loading="lazy">
          </div>
        `;
        projectLink = "https://github.com/brenmathew/Fraud_Detection/tree/main";
        break;   

        case "Web Scraping":
        modalDescription = "The purpose of the following project is to scrape data from the list of websites provided in an Excel file, calculating the positive and negative score based on predefined set of values and extracting the articles to an output Excel file.";
        newImageSrc = "./assets/images/project-70.png";
        additionalContent = `
          <div class="blog-image">
            <img src="./assets/images/project-71.png" alt="Fraud Detection Details" loading="lazy">
          </div>
          <p class="blog-description">Tasks completed:</p>
          <ul class="blog-description">
            <li>• Data collection</li>
            <li>• Data Cleaning</li>
            <li>• Exploratory Data Analysis</li>
            <li>• Statistical Modelling</li>
            <li>• Reporting though an Excel file</li>
          </ul>
          <div class="blog-image">
            <img src="./assets/images/project-72.png" alt="More Fraud Detection Details" loading="lazy">
          </div>
        `;
        projectLink = "https://github.com/brenmathew/Web_Scraping/tree/main";
        break;

        case "Time Series Forecasting":
        modalDescription = "This notebook provides a step-by-step implementation of the ARIMA model for time series forecasting";
        newImageSrc = "./assets/images/project-80.png";
        additionalContent = `
          <div class="blog-image">
            <img src="./assets/images/project-81.png" alt="Details" loading="lazy">
          </div>
          <p class="blog-description">Goals achieved:</p>
          <ul class="blog-description">
            <li>• Data Preprocessing</li>
            <li>• Exploratory Data Analysis</li>
            <li>• Implementation of the ARIMA model</li>
            <li>• Forecasting using the trained ARIMA model</li>
          </ul>
          <div class="blog-image">
            <img src="./assets/images/project-83.png" alt="More Details" loading="lazy">
          </div>
        `;
        projectLink = "https://github.com/brenmathew/ARIMA_Model";
        break
       
        case "Speech to Text Conversion":
        modalDescription = "The Speech-to-Text project is a Python-based application that leverages the SpeechRecognition library to convert speech input into text. It allows users to provide pre-recorded audio files for transcription.";
        newImageSrc = "./assets/images/project-90.png";
        additionalContent = `
          <div class="blog-image">
            <img src="./assets/images/project-91.png" alt="Details" loading="lazy">
          </div>
          <p class="blog-description">Goals achieved:</p>
          <ul class="blog-description">
            <li>• Integration of SpeechRecognition Library: Incorporated the SpeechRecognition library to facilitate the conversion of speech to text.</li>
            <li>• Audio Input Handling: Implemented functionality to handle both microphone input and pre-recorded audio files for transcription.</li>
            <li>• Speech Recognition Engine Selection: Enabled users to choose from various speech recognition engines to enhance flexibility and accuracy.</li>
          </ul>
          <div class="blog-image">
            <img src="./assets/images/project-92.png" alt="More Details" loading="lazy">
          </div>
        `;
        projectLink = "https://github.com/brenmathew/Speech_to_Text_Conversion";
        break
          
        default:
          modalDescription = `Detailed description of ${projectTitle}.`;
          newImageSrc = projectItem.querySelector("img")?.src || "";
          additionalContent = "";
          projectLink = "https://github.com/brenmathew";
          break;
      }

      // Populate modal with specific project details
      modalContainer.classList.add("active");
      modalContainer.querySelector(".portfolio-modal-title").textContent = projectTitle;
      modalContainer.querySelector(".modal-date").textContent = projectTitle === "Netflix" ? "Link to the entire project below" : "Link to the entire project below";
      modalContainer.querySelector(".portfolio-modal-content").textContent = modalDescription;
      modalContainer.querySelector(".modal-image img").src = newImageSrc;
      modalContainer.querySelector(".additional-content").innerHTML = additionalContent;

      // Update project link button
      const projectLinkButton = modalContainer.querySelector(".project-link-button");
      projectLinkButton.href = projectLink;

      const closeButton = modalContainer.querySelector(".portfolio-modal-close-btn");
      closeButton.onclick = function() {
        modalContainer.classList.remove("active");
        window.removeEventListener("click", outsideClickListener);
      };

      const outsideClickListener = function(event) {
        if (!modalContainer.querySelector(".portfolio-modal").contains(event.target)) {
          modalContainer.classList.remove("active");
          window.removeEventListener("click", outsideClickListener);
        }
      };

      setTimeout(() => {
        window.addEventListener("click", outsideClickListener);
      }, 0);

      modalContainer.querySelector(".portfolio-modal").addEventListener("click", function(event) {
        event.stopPropagation();
      });
    });
  });
});


// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav link
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    pages.forEach(page => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks.forEach(navLink => navLink.classList.remove("active"));
        this.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
      }
    });
  });
});
