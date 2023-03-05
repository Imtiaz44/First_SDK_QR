import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Scanner;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;


public class prime {

    public static void main(String[] args) {
        // code for Epochtime for Feedback APIs 

        	Date today = Calendar.getInstance().getTime();
 
		// Constructs a SimpleDateFormat using the given pattern
		SimpleDateFormat crunchifyFormat = new SimpleDateFormat("MMM dd yyyy HH:mm:ss.SSS zzz");
 
		// format() formats a Date into a date/time string.
		String currentTime = crunchifyFormat.format(today);
		System.out.print("Current Time = \n" + currentTime);
 
		try {
 
			// parse() parses text from the beginning of the given string to produce a date.
			Date date = crunchifyFormat.parse(currentTime);
 
			// getTime() returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this Date object.
			long epochTime = date.getTime();
 
		 System.out.print("Current Time in Epoch: \n" + epochTime);
 
		} catch (ParseException e) {
			e.printStackTrace();
		}
 

    // Code for getting encoded value of HMAC-SHA256 (Hash based msg authentication code for integrity )
        Scanner ac= new Scanner(System.in); 
        System.out.print("\n ____Enter Access token_____ \n"); 
        String access_token= ac.nextLine();
      // String secret = "0ffeaa86-69ed-4bdb-8241-8f6b131beac3", token = "vlEDbKjiD8yb9S9TKaRX2iF_MDzuv1dvJdynnlZAh1E" ;
      String secret = "0ffeaa86-69ed-4bdb-8241-8f6b131beac3";
        
       try {
       //String result = calculateAuthorizationHeaderValue( secret, token);
       String result = calculateAuthorizationHeaderValue( secret, access_token);

        System.out.print( "RESULT-**-> " + result );
       }
        catch(UnsupportedEncodingException e){

        
         System.out.print( "****UnsupportedEncodingException*****" );
        
        }
        catch(InvalidKeyException e){
           System.out.print( "******InvalidKeyException******" ); 
        }
        catch(NoSuchAlgorithmException e){
           System.out.print( "*****NoSuchAlgorithmException******" ); 
        }

    }

public static String calculateAuthorizationHeaderValue(String clientSecret, String bindIdAccessToken) throws UnsupportedEncodingException, InvalidKeyException, NoSuchAlgorithmException {

        // Create and initialize the Mac instance
        Mac mac = Mac.getInstance("HmacSHA256");
        byte[] keyBytes = clientSecret.getBytes(StandardCharsets.UTF_8);
        SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "HmacSHA256");
        mac.init(keySpec);

        // Calculate the MAC on the BindID AccessToken
        byte[] signedBytes = mac.doFinal(bindIdAccessToken.getBytes(StandardCharsets.UTF_8));

         // Encode the signed bytes to base64
        String encodedResult = Base64.getEncoder().encodeToString(signedBytes);

        // Create the Authorization Header value
        //System.out.print( "VALUE of FEEDback----> BindIdBackend AccessToken" + bindIdAccessToken);
        //System.out.print( "VALUE of FEEDback----> BindIdBackend encoded Result" + encodedResult);
        return "BindIdBackend AccessToken " + bindIdAccessToken + "; " + encodedResult;


    }


}
