import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Collection from "./collection/Collection";
import "./AllCollection.css";
const AllCollection = () => {
  return (
    <div className="allCollection">
      <div className="allCollection__heading">
        <h2>Collections</h2>
        <div className="allCollection__heading__link">
          <p>SHOP MORE</p>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="allCollection__row">
        <Collection
          title="Hair Care"
          products="61"
          image1="https://static-01.daraz.com.np/p/a26f807c38145dd5944cc387979602e5.jpg"
          image2="https://static-01.daraz.com.np/p/5a5267a8074853304b3a31296affe9d4.jpg"
          image3="https://static-01.daraz.com.np/p/11a01f5f9c8f517c9bbab69633232969.jpg"
        />
        <Collection
          title="Happy Feeding!"
          products="198"
          image1="https://static-01.daraz.com.np/p/cec7680069766dbba703e50132959d52.jpg"
          image2="https://static-01.daraz.com.np/p/3d5d119fde53fa0174f6c9c534bbe0a9.jpg"
          image3="https://static-01.daraz.com.np/p/3637ba83cb73411132e12826fb02c09b.jpg"
        />
        <Collection
          title="Enlivening Fragrance"
          products="61"
          image1="https://static-01.daraz.com.np/p/74078fccd6954fcf6bc51c15e2319dfc.jpg"
          image2="https://static-01.daraz.com.np/p/a59328650f43d5cd4c7eb9c75d283ce5.jpg"
          image3="https://static-01.daraz.com.np/p/034f51bd309ea4a6f7f6d6af0ddebe2d.jpg"
        />
        <Collection
          title="Sparkel And Shine"
          products="52"
          image1="https://static-01.daraz.com.np/p/af390c41ec4f92fd556bbddc383716b7.jpg"
          image2="https://static-01.daraz.com.np/p/6985f3027640ae09ed3761fcf6196f1d.jpg"
          image3="https://static-01.daraz.com.np/p/934b842000524ef8369dd757414591b3.jpg"
        />
      </div>
      <div className="allCollection__row">
        <Collection
          title="Looking for Pet Foods?"
          products="91"
          image1="https://static-01.daraz.com.np/p/6829b18445279cbde954a68049408b99.jpg"
          image2="https://static-01.daraz.com.np/p/8145c8b7f9b68746ebc044b30cbf82b3.jpg"
          image3="https://static-01.daraz.com.np/p/833e6387ac54b4541ecd09eef8538b15.jpg"
        />
        <Collection
          title="Honey"
          products="157"
          image1="https://static-01.daraz.com.np/p/fbdce3c8e5a385887c9a1c522d8a4253.jpg"
          image2="https://static-01.daraz.com.np/p/62ba0a3359f739f1773df8202af8becc.jpg"
          image3="https://static-01.daraz.com.np/p/b876f726628e1ab38c1a44d17562eb0b.jpg"
        />
        <Collection
          title="Perfect Hair"
          products="154"
          image1="https://static-01.daraz.com.np/p/a6d2bc8215d4424cc6e27bdfe68be451.jpg"
          image2="https://static-01.daraz.com.np/p/29a6b93847ed18e7ea269dbe03c29078.jpg"
          image3="https://static-01.daraz.com.np/p/3196c4687f329c6b013300a6ae44e677.jpg"
        />
        <Collection
          title="Grain, Beans & Pulses"
          products="54"
          image1="https://static-01.daraz.com.np/p/d3a96d295f5afa73c1ea558d830735a8.jpg"
          image2="https://static-01.daraz.com.np/p/89a623046f4c33edc57170be4b71dcf7.jpg"
          image3="https://static-01.daraz.com.np/p/89a623046f4c33edc57170be4b71dcf7.jpg"
        />
      </div>
    </div>
  );
};

export default AllCollection;
