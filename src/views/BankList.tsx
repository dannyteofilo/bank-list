import React from 'react';
import { useGetListQuery } from '@/redux/services/bankApi';
import Card from '../components/Card';
import Header from '@/components/Header';

function BankList() {
  const { data, error, isFetching, isLoading } = useGetListQuery(null);

  if (isFetching || isLoading) return <p>Loading ...</p>;
  if (error) return <p>Some error</p>;

  return (
    <div className="h-screen pb-8">
      <Header />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((bank) => (
          <Card
            key={bank.bankName}
            title={bank.bankName}
            description={bank.description}
            imageUrl={bank.url}
            age={bank.age}
          />
        ))}
      </div>
    </div>
  );
}

export default BankList;
