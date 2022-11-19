from app.models import otp
def find_otp_block(recipient_id: str):
    query = "SELECT * FROM OTP_Blocks WHERE recipient_id=:recipient_id" \
     "AND created_on >= now() at time zone 'UTC' - interval '5 minutes' "
    return otp.fetch_one(query, values = {recipient_id: })