from django.shortcuts import HttpResponse
import json
from decouple import config
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


def sendGridEmail(request):
    requestBody = json.loads(request.body)
    fromEmail = requestBody['email']
    fullName = requestBody['fullName']
    content = requestBody['message']

    message = Mail(
        from_email='happyeric76@hotmail.com',
        to_emails='happyeric77@gmail.com',
        subject='<my website> {fullName} is contacting you'.format(fullName=fullName),
        html_content='<strong>{content} \n</strong> <br/> {fromEmail}'.format(content=content, fromEmail=fromEmail))
    try:
        sg = SendGridAPIClient(config('SENDGRID_API_KEY'))
        response = sg.send(message)
        print('Response status code: ' + str(response.status_code))
        return HttpResponse('email_sent')
    except Exception as e:
        print('Error sending contact message: ' + str(e))
        return HttpResponse("email_not_sent:{e}".format(e=e), content_type="text/plain")
