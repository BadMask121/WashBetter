const style = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 10,
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
    flexDirection: 'row',
    margin: 10,
  },
  imageContainer: {
    // paddingLeft: 10,
  },
  cardInfoContainer: {
    flex: 1,
    width: 100,
    padding: 10,
    justifyContent: 'space-between',
  },
  cardBookContainer: {
    flexDirection: 'row',
    width: 100,
    height: 150,
    marginRight: 10,
  },
  cardBook: {
    height: 150,
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
};

export default style;
