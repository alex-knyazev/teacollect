import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import processError from '@/utils/processError';

const REGISTER_MUTATION = gql`
  mutation register($input: RegistrationInput!) {
    register(input: $input) {
      token
    }
  }
`;

const withApollo = (Component) => {
  return (props) => {
    const { showNotification } = props;
    return (
      <Mutation mutation={REGISTER_MUTATION}>
        {(register, { data, error, loading }) => {
          if (error) {
            const errorMessage = processError(error);
            showNotification({ message: errorMessage, variant: 'error' });
          }
          return (
            <Component
              {...props}
              registerMutation={register}
              registerData={data}
            />
          );
        }}
      </Mutation>
    );
  };
};

export default withApollo;
