import { withRouter } from 'next/router';

const WithLogic = (Component) => {
  return withRouter((props) => {
    const {
      router: {
        query: { name: chosenCollectionFilterName },
      },
      allCollections,
    } = props;
    const chosenCollection = allCollections.find(
      (collection) => collection.value === chosenCollectionFilterName,
    );

    const emitChangeCollection = (collectionName) => {
      props.router.push({
        pathname: props.router.pathname,
        query: {
          name: collectionName,
        },
      });
    };

    return (
      <Component
        {...props}
        chosenCollection={chosenCollection}
        emitChangeCollection={emitChangeCollection}
      />
    );
  });
};

export default WithLogic;
