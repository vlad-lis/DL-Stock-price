import sys
import pandas as pd
import joblib
import json

model_combined = joblib.load('./ML/models/saved_models/model_combined.joblib')
model_inside = joblib.load('./ML/models/saved_models/model_inside.joblib')
model_outside = joblib.load('./ML/models/saved_models/model_outside.joblib')
model_cyber = joblib.load('./ML/models/saved_models/model_cyber.joblib')

age = int(sys.argv[1])
sex = int(sys.argv[2])
attacked = int(sys.argv[3])
fighting = int(sys.argv[4])
lonely = int(sys.argv[5])
friends = int(sys.argv[6])
absence = int(sys.argv[7])
student_compassion = int(sys.argv[8])
parent_compassion = int(sys.argv[9])
underweight = int(sys.argv[10])
overweight = int(sys.argv[11])
obese = int(sys.argv[12])


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
    input_template.at[0, 'other_students_kind_and_helpful'] = student_compassion
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
