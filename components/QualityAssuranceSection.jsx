import { FaCheckCircle } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

export default function QualityAssuranceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Quality Assurance"
          title="Ensuring Excellence in Every Service"
          details="Our security team undergoes continuous training, regular evaluation, and close supervision to guarantee top-quality service at every stage."
        />

        <div className="space-y-6 text-gray-700 max-w-4xl mx-auto">
          <p>
            Security is only as good as the systems that maintain it. At Anondo
            Universal, quality is built into every stage of service delivery.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <FaCheckCircle className="text-primary mr-3 mt-1" />
              <span>
                <strong>Mandatory 30-Day Training:</strong> No guard is deployed
                without academy certification.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-primary mr-3 mt-1" />
              <span>
                <strong>Performance Evaluation:</strong> Fitness, skill, and
                knowledge are tested before assignment.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-primary mr-3 mt-1" />
              <span>
                <strong>Regular Duty Check-Ups:</strong> Surprise inspections
                ensure guards stay alert and disciplined.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-primary mr-3 mt-1" />
              <span>
                <strong>Refresher Courses:</strong> Guards return for ongoing
                training on new laws and techniques.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-primary mr-3 mt-1" />
              <span>
                <strong>Client Feedback Loop:</strong> A dedicated officer
                manages concerns, ensuring fast resolution.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-primary mr-3 mt-1" />
              <span>
                <strong>Strict Code of Conduct:</strong> Punctuality, honesty,
                and hygiene are mandatory.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
