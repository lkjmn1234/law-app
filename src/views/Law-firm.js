import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import CheckboxesGroup from '../components/layout/CheckboxGroup';
import Button from '@material-ui/core/Button';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <h3>Law Firm Search</h3>
      <CheckboxesGroup header="Area of Practice" 
      content={
        [
          { name: 'Admin Law' }, { name: 'Arbitration' },
          { name: 'Bankruptcy' }, { name: 'Marriage' },
          { name: 'Civil claims' }, { name: 'Banking & finace' },
          { name: 'Commercial law' }, { name: 'Consumer protection' },
          { name: 'Landlord & tenant' }, { name: 'Notary Public' },
        ]
        }>
      </CheckboxesGroup>
      <CheckboxesGroup header="Location" 
      content={
        [
          { name: 'All' }, { name: 'New Territories' },
          { name: 'KowLoon' }, { name: 'Hong Kong Island' },
        ]
        }>
      </CheckboxesGroup>
      <CheckboxesGroup header="Years of Establishment" 
      content={
        [
          { name: '1 - 5' }, { name: '5 - 10' },
          { name: '10 - 15' }, { name: '15 - 20' },
          { name: '20+' }, 
        ]
        }>
      </CheckboxesGroup>
      <CheckboxesGroup header="Languages" 
      content={
        [
          { name: 'Cantonese' }, { name: 'Mandarin' },
          { name: 'English' }, { name: 'French' },
          { name: 'Spanish' }, { name: 'Hindu' },
          { name: 'Punjabi' }, { name: 'Arabic' },
          { name: 'Russian' }, 
        ]
        }>
      </CheckboxesGroup>
      <Button size="large" style={{ backgroundColor: '#DCDCDC' ,marginBottom:'20px',marginTop:'20px',marginLeft:'45%'}}>Search</Button>
    </>
  );
}

export default Home;