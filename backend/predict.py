import sys
import pandas as pd
import joblib
import json

model_combined = joblib.load('./ML/models/saved_models/model_combined.joblib')
model_inside = joblib.load('./ML/models/saved_models/model_inside.joblib')
model_outside = joblib.load('./ML/models/saved_models/model_outside.joblib')
model_cyber = joblib.load('./ML/models/saved_models/model_cyber.joblib')

#data = json.loads(sys.argv[1])


def get_age(age):
    if age == '11 years old or younger':
        return 11
    elif age == '12 years old':
        return 12
    elif age == '13 years old':
        return 13
    elif age == '14 years old':
        return 14
    elif age == '15 years old':
        return 15
    elif age == '16 years old':
        return 16
    elif age == '17 years old':
        return 17
    elif age == '18 years old or older':
        return 18
    else:
        print('something went wrong')


def get_sex(sex):
    if sex == 'Male':
        return 0
    elif sex == 'Female':
        return 1


def get_attacked_fighting(attacked):
    if attacked == '0 times':
        return 0
    elif attacked == '1 time':
        return 1
    elif attacked == '2 or 3 times':
        return 2
    elif attacked == '4 or 5 times':
        return 3
    elif attacked == '6 or 7 times':
        return 4
    elif attacked == '8 or 9 times':
        return 5
    elif attacked == '10 or 11 times':
        return 6
    elif attacked == '12 or more times':
        return 7
    else:
        print('something went wrong')


def get_lonely(lonely):
    if lonely == 'Never':
        return 0
    elif lonely == 'Rarely':
        return 1
    elif lonely == 'Sometimes':
        return 2
    elif lonely == 'Most of the time':
        return 3
    elif lonely == 'Always':
        return 4
    else:
        print('something went wrong')


def get_friends(friends):
    if friends == '0':
        return 0
    elif friends == '1':
        return 1
    elif friends == '2':
        return 2
    elif friends == '3 or more':
        return 3
    else:
        print('something went wrong')


def get_absence(absence):
    if absence == '0 days':
        return 0
    elif absence == '1 or 2 days':
        return 1
    elif absence == '3 to 5 days':
        return 2
    elif absence == '6 to 9 days':
        return 3
    elif absence == '10 or more days':
        return 4
    else:
        print('something went wrong')


def get_compassion(compassion):
    if compassion == 'Never':
        return 0
    elif compassion == 'Rarely':
        return 1
    elif compassion == 'Sometimes':
        return 2
    elif compassion == 'Most of the time':
        return 3
    elif compassion == 'Always':
        return 4
    else:
        print('something went wrong')


def get_binary_value(value):
    if value == 'Yes':
        return 1
    elif value == 'No':
        return 0
    else:
        print('something went wrong')


# new args
age = get_age(sys.argv[1])
sex = get_sex(sys.argv[2])
attacked = get_attacked_fighting(sys.argv[3])
fighting = get_attacked_fighting(sys.argv[4])
lonely = get_lonely(sys.argv[5])
friends = get_friends(sys.argv[6])
absence = get_absence(sys.argv[7])
student_compassion = get_compassion(sys.argv[8])
parent_compassion = get_compassion(sys.argv[9])
underweight = get_binary_value(sys.argv[10])
overweight = get_binary_value(sys.argv[11])
obese = get_binary_value(sys.argv[12])

#age = int(sys.argv[1])
#sex = int(sys.argv[2])
#attacked = int(sys.argv[3])
#fighting = int(sys.argv[4])
#lonely = int(sys.argv[5])
#friends = int(sys.argv[6])
#absence = int(sys.argv[7])
#student_compassion = int(sys.argv[8])
#parent_compassion = int(sys.argv[9])
#underweight = int(sys.argv[10])
#overweight = int(sys.argv[11])
#obese = int(sys.argv[12])


def predict():
    # template to insert into model
    input_template = pd.read_csv('./ML/data/input_template.csv')

    # insert into template
    input_template.at[0, 'age'] = age
    input_template.at[0, 'sex'] = sex
    input_template.at[0, 'physically_attacked'] = attacked
    input_template.at[0, 'physical_fighting'] = fighting
    input_template.at[0, 'felt_lonely'] = lonely
    input_template.at[0, 'close_friends'] = friends
    input_template.at[0, 'miss_school_no_permission'] = absence
    input_template.at[0,
                      'other_students_kind_and_helpful'] = student_compassion
    input_template.at[0, 'parents_understand_problems'] = parent_compassion
    input_template.at[0, 'were_underweight'] = underweight
    input_template.at[0, 'were_overweight'] = overweight
    input_template.at[0, 'were_obese'] = obese

    # predictions
    combined = model_combined.predict_proba(input_template)
    inside = model_inside.predict_proba(input_template)
    outside = model_outside.predict_proba(input_template)
    cyber = model_cyber.predict_proba(input_template)

    # get probability of "1" and round up result
    combined = round(combined[0][1]*100, 1)
    inside = round(inside[0][1]*100, 1)
    outside = round(outside[0][1]*100, 1)
    cyber = round(cyber[0][1]*100, 1)

    output = {'combined': combined,
              'inside': inside,
              'outside': outside,
              'cyber': cyber}

    output = json.dumps(output)

    return output


if __name__ == '__main__':
    predictions = predict()
    print(predictions)
