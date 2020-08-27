import React, { ChangeEvent, useCallback, useState } from 'react';

const steps: ReadonlyArray<{
  fieldName: string;
  placeholder: string;
  label: string;
  type?: 'text' | 'email';
}> = [
  {
    fieldName: 'contactName',
    placeholder: 'Fill with your name',
    label: 'Name',
  },
  {
    fieldName: 'email',
    placeholder: 'Now your email address',
    label: 'Name',
    type: 'email',
  },
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);

  const formUpdate = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    },
    [formData]
  );

  const nextStep = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  return (
    <section id="contact" className="contact">
      <div className="row">
        <div className="col-8 ml-auto mr-auto">
          <h1>Get in touch</h1>
          <p className="info">
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, fill up the awesome form below or send an email to{' '}
            <a href="mailto:sam@sammurphy.dev">sam@sammurphy.dev</a> and let's
            talk.
          </p>
          <form>
            <div className="form-group">
              <input
                type={steps[step].type ?? 'text'}
                id={steps[step].fieldName}
                name={steps[step].fieldName}
                className="form-control"
                placeholder={steps[step].placeholder}
                onChange={formUpdate}
                value={formData[steps[step].fieldName]}
              />
              <label htmlFor={steps[step].fieldName}>{steps[step].label}</label>
              <button
                className="btn btn-primary"
                type="button"
                onClick={nextStep}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
