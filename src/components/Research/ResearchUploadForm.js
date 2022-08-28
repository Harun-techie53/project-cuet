import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux';
import {createResearchHandler} from '../../actions/researchAction';

const ResearchUploadForm = () => {
    const pdfFileRef = useRef();
    const dispatch = useDispatch();
    const [researchInputFields, setResearchInputFields] = useState({
        title: '',
        slug: '',
        description: '',
        pdfFile: []
    }); 

    const { title, slug, description } = researchInputFields;

    const handleInputChange = (e) => {
        setResearchInputFields({
            ...researchInputFields,
            [e.target.name]: e.target.value
        });
    }

    const handleFileChange = (e) => {
        setResearchInputFields({
            ...researchInputFields,
            pdfFile: e.target.files
        });
    }

    const handleResearchFormSubmit = (e) => {
        e.preventDefault();
        // console.log(rese)
        dispatch(createResearchHandler(researchInputFields));
        setResearchInputFields({
            ...researchInputFields,
            title: '',
            slug: '',
            description: '',
            pdfFile: []
        });
    }
  return (
    <section className="p-6 py-4 dark:dark:bg-gray-800 dark:dark:text-gray-50">
	<form 
        novalidate=""
        onSubmit={handleResearchFormSubmit}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        encType="multipart/form-data"
    >
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Reseach Inormation</p>
				<p className="text-xs">
                    Upload Your Research
                </p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full">
					<label for="title" className="text-sm">
                        Research Title
                    </label>
					<input 
                        id="title"
                        name="title" 
                        type="text" 
                        value={title}
                        onChange={handleInputChange}
                        placeholder="Research Title" 
                        className="input-elem"
                        required 
                    />
				</div>
				<div className="col-span-full">
					<label for="research-slug" className="text-sm">Research Slug</label>
					<textarea 
                        id="research-slug"
                        name="slug"
                        value={slug}
                        onChange={handleInputChange} 
                        placeholder="" 
                        className="input-elem"
                        required
                    />
				</div>
				<div className="col-span-full">
					<label for="research-desc" className="text-sm">Research Description</label>
					<textarea 
                        id="research-desc" 
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                        placeholder="" 
                        className="input-elem"
                    />
				</div>
                <div className="col-span-3">
                    <label for="research-thumbnail" className="text-sm">
                        Research PDF
                    </label>
                    <div>
                        <input 
                            type='file' 
                            multiple
                            ref={pdfFileRef}
                            onChange={handleFileChange}
                        />
                        {/* <button 
                            type="button" 
                            className="px-4 py-2 border rounded-md dark:dark:border-gray-100"
                            onChange={() => pdfFileRef.current.focus()}
                        >
                            Upload PDF
                        </button> */}
                        {/* <button 
                            type="button" 
                            className="px-4 py-2 border rounded-md dark:dark:border-gray-100"
                        >
                            Upload Thumbnail
                        </button> */}
                    </div>
                </div>
                <button
                    type="submit"
                    className='btn-blue col-span-2 pt-3'
                >
                    Submit Research
                </button>
			</div>
		</fieldset>
	</form>
</section>
  )
}

export default ResearchUploadForm