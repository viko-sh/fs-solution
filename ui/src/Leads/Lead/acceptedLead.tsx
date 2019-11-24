import React from 'react';
import { Customer } from './components/Customer';
import { JobDetails } from './components/JobDetails';
import { LeadDescription } from './components/LeadDescription';
import { CustomerInfo } from './components/CustomerInfo';
import { LeadProps } from './type';
import { LeadWrapper } from './style';

export const AcceptedLead = ({
  categoryName,
  contactEmail,
  contactName,
  contactPhone,
  description,
  id,
  postCode,
  price,
  suburbName
}: LeadProps) => {
  return (
    <LeadWrapper>
      <Customer contactName={contactName} />
      <JobDetails
        id={id}
        suburbName={suburbName}
        postCode={postCode}
        categoryName={categoryName}
        price={price}
      />
      <CustomerInfo contactEmail={contactEmail} contactPhone={contactPhone} />
      <LeadDescription description={description} />
    </LeadWrapper>
  );
};
