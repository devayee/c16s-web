     async function sendContact(ev) {
        ev.preventDefault();

        const senderEmail = document
          .getElementById('emailInput').value;
        const senderMessage = document
          .getElementById('messageInput').value;

        const webhookBody = {
          embeds: [{
            title: 'New Message from Website!',
            fields: [
              { name: 'Name', value: senderEmail },
              { name: 'Message', value: senderMessage }
            ]
          }],
        };

        const webhookUrl = 'https://discord.com/api/webhooks/1395096098833563698/5zh3bcpOY8U6j6_GByMUq_kzmhVc-2DY1wPt9yPzTRRZFUkm3NNpAO07o0qd1XZNiyLu';

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });

        if (response.ok) {
          alert('We received your message!');
        } else {
          alert('There was an error! Try again later!');
        }
      }