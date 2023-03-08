
import pandas as pd
import joblib

model_combined = joblib.load('./models/model_combined.joblib')
model_inside = joblib.load('./models/model_inside.joblib')
model_outside = joblib.load('./models/model_outside.joblib')
model_cyber = joblib.load('./models/model_cyber.joblib')


def input_and_predict(data):
    #template to insert into model
    input_template = pd.read_csv('./data/input_template.csv')
    
    #inputs
    age = data.age
    sex = data.sex
    attacked = data.attacked
    fighting = data.fighting
    lonely = data.lonely
    friends = data.friends
    absence = data.absence
    student_compassion = data.student_compassion
    parent_compassion = data.parent_compassion
    underweight = data.underweight
    overweight = data.overweight
    obese = data.obese
    
    #insert inputs into template
    input_template.at[0, 'age'] = int(age)
    input_template.at[0, 'sex'] = int(sex)
    input_template.at[0, 'physically_attacked'] = int(attacked)
    input_template.at[0, 'physical_fighting'] = int(fighting)
    input_template.at[0, 'felt_lonely'] = int(lonely)
    input_template.at[0, 'close_friends'] = int(friends)
    input_template.at[0, 'miss_school_no_permission'] = int(absence)
    input_template.at[0, 'other_students_kind_and_helpful'] = int(student_compassion)
    input_template.at[0, 'parents_understand_problems'] = int(parent_compassion)
    input_template.at[0, 'were_underweight'] = int(underweight)
    input_template.at[0, 'were_overweight'] = int(overweight)
    input_template.at[0, 'were_obese'] = int(obese)
    
    #predictions
    combined = model_combined.predict_proba(input_template)
    inside = model_inside.predict_proba(input_template)
    outside = model_outside.predict_proba(input_template)
    cyber = model_cyber.predict_proba(input_template)
    
    #get probability of "1" and round up result
    combined = round(combined[0][1]*100, 1)
    inside = round(inside[0][1]*100, 1)
    outside = round(outside[0][1]*100, 1)
    cyber = round(cyber[0][1]*100, 1)

    output = {'overall': combined,
             'inside': inside,
             'outside': outside,
             'cyber': cyber}
    
    return output
