import COLORS from '../../consts/colors';

const style = {
    bookNowBtn: {
      height: 50,
      width: 150,
      backgroundColor: COLORS.white,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    iconContainer: {
      height: 60,
      width: 60,
      position: 'absolute',
      top: -30,
      backgroundColor: COLORS.white,
      borderRadius: 30,
      right: 20,
      elevation: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailsContainer: {
      top: -30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 40,
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
      flex: 0.3,
    },
    header: {
      marginTop: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    imageDetails: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      position: 'absolute',
      bottom: 30,
    },
    footer: {
      flexDirection: 'row',
      backgroundColor: COLORS.primary,
      height: 70,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
  }

export default style;  