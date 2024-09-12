import React from 'react';
import NotificationItem from './NotificationCard';

const notifications = [
  {
    type: 'Donation',
    description:
      'N1500 has been successfully deposited into your account by Eniola Ademola',
    time: 'Sept 18 at 12:55pm',
  },
  {
    type: 'Message',
    description:
      'Aminu Ahmed sent you a message. Check Inbox',
    time: 'Sept 18 at 12:55pm',
  },
  {
    type: 'Donation',
    description:
      'N1500 has been successfully deposited into your account by Eniola Ademola',
    time: 'Sept 18 at 12:55pm',
  },
  {
    type: 'Message',
    description:
      'Aminu Ahmed sent you a message. Check Inbox',
    time: 'Sept 18 at 12:55pm',
  },
  {
    type: 'Donation',
    description:
      'N1500 has been successfully deposited into your account by Eniola Ademola',
    time: 'Sept 18 at 12:55pm',
  },
];

const Notifications: React.FC = () => {
  return (
    <div className='max-w-xl'>
      <div>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            type={
              notification.type as 'Donation' | 'Message'
            }
            description={notification.description}
            time={notification.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
