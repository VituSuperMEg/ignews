import { api } from '@/services/api';
import styles from './styles.module.scss';
import { useSession, signIn } from 'next-auth/react';
import { getStripeJs } from '@/services/stripe-js';
import { useRouter } from 'next/router';

interface SubscribeButtoProps {
  priceId : string;
}
export function SubscribeButton ( { priceId }:SubscribeButtoProps) {
   
  const { data : session } = useSession();
  const router = useRouter()
  async function handleSubscribe () {
    if(!session){
      signIn('github');
      return;
    }
    if(session.activeSubscription){
          router.push('/post');
          return;
    }
    // criação da checkout session
    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      stripe?.redirectToCheckout({ sessionId });

    }catch(error){
      console.log(error)
    }
  }
  return(
    <button
     type="button"
     className={styles.subscribeButton}
     onClick={handleSubscribe}
    >
     Subscribe now
    </button>
  )
}